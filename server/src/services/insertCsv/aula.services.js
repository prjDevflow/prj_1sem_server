const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addAula(req, res) {
  try {
    const { file } = req;
    if (!file || !file.buffer)
      throw new Error("Arquivo não enviado corretamente");

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
        throw new Error(
          "Formato inválido. Esperado: Turma;Disciplina;Professor;Horario;Sala;Semana"
        );
      }

      const turma = lineSplit[0].trim();
      const horario = lineSplit[1].trim();
      const sala = lineSplit[2].trim();
      const semana = lineSplit[3].trim();
      const disciplina = lineSplit[4].trim();
      const professor = lineSplit[5].trim();


      // -- Turma
      const buscaTurma = await db.query(
        "SELECT idturma FROM turma WHERE nome = $1",
        [turma]
      );
      if (buscaTurma.rowCount === 0) {
        throw new Error(`Turma '${turma}' não encontrada`);
      }
      const idTurma = buscaTurma.rows[0].idturma;

      // -- Disciplina
      const buscaDisciplina = await db.query(
        "SELECT iddisciplina FROM disciplina WHERE nome = $1",
        [disciplina]
      );
      if (buscaDisciplina.rowCount === 0) {
        throw new Error(`Disciplina '${disciplina}' não encontrada`);
      }
      const idDisciplina = buscaDisciplina.rows[0].iddisciplina;

      // -- Professor
      const buscaProfessor = await db.query(
        "SELECT idprofessor FROM professor WHERE nome = $1",
        [professor]
      );
      if (buscaProfessor.rowCount === 0) {
        throw new Error(`Professor '${professor}' não encontrado`);
      }
      const idProfessor = buscaProfessor.rows[0].idprofessor;

      // -- Horario
      const [horaInicial, horaFinal] = horario.split("-").map((h) => h.trim());

      const buscaHorario = await db.query(
        "SELECT idhorario FROM horario WHERE horainicial = $1 AND horafinal = $2",
        [horaInicial, horaFinal]
      );

      if (buscaHorario.rowCount === 0) {
        throw new Error(`Horário '${horario}' não encontrado`);
      }
      const idHorario = buscaHorario.rows[0].idhorario;

      // -- Sala
      const buscaSala = await db.query(
        "SELECT numero FROM sala WHERE nome = $1",
        [sala]
      );
      if (buscaSala.rowCount === 0) {
        throw new Error(`Sala '${sala}' não encontrada`);
      }
      const numeroSala = buscaSala.rows[0].numero;

      // -- Semana
      const buscaSemana = await db.query(
        "SELECT idsemana FROM semana WHERE dia = $1",
        [semana]
      );
      if (buscaSemana.rowCount === 0) {
        throw new Error(`Semana/Dia '${semana}' não encontrado`);
      }
      const idSemana = buscaSemana.rows[0].idsemana;

      // Inserção na tabela Aula
      await db.query(
        "INSERT INTO aula (turma_idturma, disciplina_iddisciplina, professor_idprofessor, horario_idhorario, sala_numero, semana_idsemana) VALUES ($1, $2, $3, $4, $5, $6)",
        [idTurma, idDisciplina, idProfessor, idHorario, numeroSala, idSemana]
      );

      count++;
    }

    return res
      .status(200)
      .json({ message: `${count} aulas cadastradas com sucesso.` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}

module.exports = addAula;
