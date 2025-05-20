const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addAula(req, res) {
  try {
    const { file } = req;
    if (!file || !file.buffer)
      throw new Error("arquivo não enviado corretamente");

    const readableFile = new Readable();
    readableFile.push(file.buffer);
    readableFile.push(null);

    const registerLine = readline.createInterface({
      input: readableFile,
    });

    let count = 0;

    for await (let line of registerLine) {
      if (!line.trim()) continue; // segurança

      const lineSplit = line.split(";");
      if (lineSplit.length < 3) {
        throw new Error("Formato de arquivo inválido");
      }

      const turma = lineSplit[0].trim();
      const disciplina = lineSplit[1].trim();
      const professor = lineSplit[2].trim();
      const horario = lineSplit[3].trim();
      const sala = lineSplit[4].trim();
      const semana = lineSplit[5].trim();

      // BUSCAS PARA RELACIONAMENTO DE TABELAS
      // -- turma --
      const buscaTurma = await db.query(
        "SELECT idTurma FROM Turma WHERE Nome = $1",
        [turma]
      );
      if (buscaTurma.rows.length === 0) {
        throw new Error(`Turma '${turma}' não encontrada`);
      }
      const idTurma = buscaTurma.rows[0].idturma;
      // -- disciplina --
      const buscaDisciplina = await db.query(
        "SELECT idDisciplina FROM Disciplina WHERE Nome = $1",
        [disciplina]
      );
      if (buscaDisciplina.rows.length === 0) {
        throw new Error(`Disciplina '${disciplina}' não encontrada`);
      }
      const idDisciplina = buscaDisciplina.rows[0].iddisciplina;
      // -- professor --
      const buscaProfessor = await db.query(
        "SELECT idProfessor FROM Professor WHERE Nome = $1",
        [professor]
      );
      if (buscaProfessor.rows.length === 0) {
        throw new Error(`Professor '${professor}' não encontrado`);
      }
      const idProfessor = buscaProfessor.rows[0].idprofessor;

          // -- Horario --
    const buscaHorario = await db.query(
      "SELECT idHorario FROM Horario WHERE HoraInicial = $1",
      [Horario_idHorario]
    );
    if (buscaHorario.rows.length === 0) {
      throw new Error(`Horario '${Horario}' não encontrado`);
    }
    const idHorario = buscaHorario.rows[0].idHorario;

    // -- Sala --
    const buscaSala = await db.query(
      "SELECT Numero FROM sala WHERE Numero = $1",
      [Sala_Numero]
    );
    if (buscaSala.rows.length === 0) {
      throw new Error(`Sala '${Sala}' não encontrado`);
    }
    const Numero = buscaHorario.rows[0].Numero;

    // -- Semana --
    const buscaSemana = await db.query(
      "SELECT dia FROM Semana WHERE dia = $1",
      [Semana_idSemana]
    );
    if (buscaSemana.rows.length === 0) {
      throw new Error(`dia '${Semana}' não encontrado`);
    }
    const idSemana = buscaHorario.rows[0].idSemana;

      await db.query(
        "INSERT INTO Aula (Turma_idTurma,Disciplina_idDisciplina,Professor_idProfessor,Horario_idHorario,Sala_Numero,Semana_idSemana) VALUES ($1, $2, $3, $4, $5, $6)",
       [idTurma, idDisciplina, idProfessor, Numero, idSemana, idHorario]
      );

      count++;
    }

    return res.status(200).json({ message: `${count} aulas cadastradas` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = addAula;
