const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addAula(req, res) {
  const client = await db.connect();

  try {
    const { file } = req;
    if (!file || !file.buffer)
      return res.status(400).json({ message: "Arquivo não enviado corretamente" });

    await client.query("TRUNCATE aula CASCADE;");

    const readableFile = new Readable();
    readableFile.push(file.buffer);
    readableFile.push(null);

    const registerLine = readline.createInterface({
      input: readableFile,
    });

    let count = 0;

    for await (let line of registerLine) {
      if (!line.trim()) continue;
    
      const lineSplit = line.split(";").map(s => s.trim());
    
      if (lineSplit.length < 6) {
        return res.status(400).json({ message: "Formato de arquivo inválido. Esperado: Turma;Horário;Sala;Semana;Disciplina;Professor" });
      }
    
      const turma = lineSplit[0];
      const horario = lineSplit[1];
      const sala = lineSplit[2];
      const semana = lineSplit[3];
      const disciplina = lineSplit[4];
      const professor = lineSplit[5];
    
      const buscaTurma = await client.query("SELECT idturma FROM turma WHERE nome = $1", [turma]);
      if (buscaTurma.rowCount === 0) {
        return res.status(404).json({ message: `Turma '${turma}' não encontrada` });
      }
      const idTurma = buscaTurma.rows[0].idturma;
    
      const buscaDisciplina = await client.query("SELECT iddisciplina FROM disciplina WHERE nome = $1", [disciplina]);
      if (buscaDisciplina.rowCount === 0) {
        return res.status(404).json({ message: `Disciplina '${disciplina}' não encontrada` });
      }
      const idDisciplina = buscaDisciplina.rows[0].iddisciplina;
    
      const buscaProfessor = await client.query("SELECT idprofessor FROM professor WHERE nome = $1", [professor]);
      if (buscaProfessor.rowCount === 0) {
        return res.status(404).json({ message: `Professor '${professor}' não encontrado` });
      }
      const idProfessor = buscaProfessor.rows[0].idprofessor;
    
      const [horaInicial, horaFinal] = horario.split("-").map((h) => h.trim());
      const buscaHorario = await client.query("SELECT idhorario FROM horario WHERE horainicial = $1 AND horafinal = $2", [horaInicial, horaFinal]);
      if (buscaHorario.rowCount === 0) {
        return res.status(404).json({ message: `Horário '${horario}' não encontrado` });
      }
      const idHorario = buscaHorario.rows[0].idhorario;
    
      const buscaSala = await client.query("SELECT numero FROM sala WHERE nome = $1", [sala]);
      if (buscaSala.rowCount === 0) {
        return res.status(404).json({ message: `Sala '${sala}' não encontrada` });
      }
      const numeroSala = buscaSala.rows[0].numero;
    
      const buscaSemana = await client.query("SELECT idsemana FROM semana WHERE dia = $1", [semana]);
      if (buscaSemana.rowCount === 0) {
        return res.status(404).json({ message: `Semana/Dia '${semana}' não encontrado` });
      }
      const idSemana = buscaSemana.rows[0].idsemana;
    
      await client.query(
        "INSERT INTO aula (turma_idturma, disciplina_iddisciplina, professor_idprofessor, horario_idhorario, sala_numero, semana_idsemana) VALUES ($1, $2, $3, $4, $5, $6)",
        [idTurma, idDisciplina, idProfessor, idHorario, numeroSala, idSemana]
      );
    
      count++;
    }

    return res.status(200).json({ message: `${count} aulas cadastradas com sucesso.` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao cadastrar aulas: " + err.message });
  } finally {
    client.release();
  }
}

module.exports = addAula;
