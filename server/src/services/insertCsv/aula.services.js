const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addAula(req, res) {
  const client = await db.connect(); // Inicia conexão com transação
  try {
    const { file } = req;
    if (!file || !file.buffer)
      return res.status(400).json({ message: "Arquivo não enviado corretamente" });

    await client.query("BEGIN"); // Início da transação
    await client.query("DELETE FROM aula");

    const readableFile = new Readable();
    readableFile.push(file.buffer);
    readableFile.push(null);

    const registerLine = readline.createInterface({
      input: readableFile,
    });

    let count = 0;

    for await (let line of registerLine) {
      if (!line.trim()) continue;

      const lineSplit = line.split(";");

      if (lineSplit.length < 6) {
        await client.query("ROLLBACK");
        return res.status(400).json({ message: "Formato de arquivo inválido." });
      }

      const [turma, horario, sala, semana, disciplina, professor] = lineSplit.map((x) => x.trim());

      const buscaTurma = await client.query("SELECT idturma FROM turma WHERE nome = $1", [turma]);
      if (buscaTurma.rowCount === 0) {
        await client.query("ROLLBACK");
        return res.status(404).json({ message: `Turma '${turma}' não encontrada` });
      }
      const idTurma = buscaTurma.rows[0].idturma;

      const buscaDisciplina = await client.query("SELECT iddisciplina FROM disciplina WHERE nome = $1", [disciplina]);
      if (buscaDisciplina.rowCount === 0) {
        await client.query("ROLLBACK");
        return res.status(404).json({ message: `Disciplina '${disciplina}' não encontrada` });
      }
      const idDisciplina = buscaDisciplina.rows[0].iddisciplina;

      const buscaProfessor = await client.query("SELECT idprofessor FROM professor WHERE nome = $1", [professor]);
      if (buscaProfessor.rowCount === 0) {
        await client.query("ROLLBACK");
        return res.status(404).json({ message: `Professor '${professor}' não encontrado` });
      }
      const idProfessor = buscaProfessor.rows[0].idprofessor;

      const [horaInicial, horaFinal] = horario.split("-").map((h) => h.trim());
      const buscaHorario = await client.query("SELECT idhorario FROM horario WHERE horainicial = $1 AND horafinal = $2", [horaInicial, horaFinal]);
      if (buscaHorario.rowCount === 0) {
        await client.query("ROLLBACK");
        return res.status(404).json({ message: `Horário '${horario}' não encontrado` });
      }
      const idHorario = buscaHorario.rows[0].idhorario;

      const buscaSala = await client.query("SELECT numero FROM sala WHERE nome = $1", [sala]);
      if (buscaSala.rowCount === 0) {
        await client.query("ROLLBACK");
        return res.status(404).json({ message: `Sala '${sala}' não encontrada` });
      }
      const numeroSala = buscaSala.rows[0].numero;

      const buscaSemana = await client.query("SELECT idsemana FROM semana WHERE dia = $1", [semana]);
      if (buscaSemana.rowCount === 0) {
        await client.query("ROLLBACK");
        return res.status(404).json({ message: `Semana/Dia '${semana}' não encontrado` });
      }
      const idSemana = buscaSemana.rows[0].idsemana;

      await client.query(
        "INSERT INTO aula (turma_idturma, disciplina_iddisciplina, professor_idprofessor, horario_idhorario, sala_numero, semana_idsemana) VALUES ($1, $2, $3, $4, $5, $6)",
        [idTurma, idDisciplina, idProfessor, idHorario, numeroSala, idSemana]
      );

      count++;
    }

    await client.query("COMMIT");
    return res.status(200).json({ message: `${count} aulas cadastradas com sucesso.` });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error(err);
    return res.status(500).json({ message: err.message });
  } finally {
    client.release(); // Libera o client de volta pro pool
  }
}

module.exports = addAula;
