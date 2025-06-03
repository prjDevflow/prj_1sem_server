const db = require("../../config/db");

async function secretariaUpdateAula(req, res) {
  try {
    const {
      idAula,
      turma,
      disciplina,
      professor,
      horarioInicial,
      horarioFinal,
      sala,
      diaSemana,
    } = req.body;

    // Verifica se a aula existe
    const aulaExiste = await db.query(`SELECT * FROM aula WHERE idaula = $1`, [
      idAula,
    ]);
    if (aulaExiste.rowCount === 0) {
      return res.status(404).json({ message: "Aula não encontrada" });
    }

    // -- Turma --
    const buscaTurma = await db.query(
      `SELECT idturma FROM turma WHERE nome = $1`,
      [turma]
    );
    if (buscaTurma.rowCount === 0) {
      return res.status(404).json({ message: "Turma não encontrada" });
    }
    const idTurma = buscaTurma.rows[0].idturma;

    // -- Disciplina --
    const buscaDisciplina = await db.query(
      `SELECT iddisciplina FROM disciplina WHERE nome = $1`,
      [disciplina]
    );
    if (buscaDisciplina.rowCount === 0) {
      return res.status(404).json({ message: "Disciplina não encontrada" });
    }
    const idDisciplina = buscaDisciplina.rows[0].iddisciplina;

    // -- Professor --
    const buscaProfessor = await db.query(
      `SELECT idprofessor FROM professor WHERE nome = $1`,
      [professor]
    );
    if (buscaProfessor.rowCount === 0) {
      return res.status(404).json({ message: "Professor não encontrado" });
    }
    const idProfessor = buscaProfessor.rows[0].idprofessor;

    // -- Horário --
    const buscaHorario = await db.query(
      `SELECT idhorario FROM horario WHERE horainicial = $1 AND horafinal = $2`,
      [horarioInicial, horarioFinal]
    );
    if (buscaHorario.rowCount === 0) {
      return res.status(404).json({ message: "Horário não encontrado" });
    }
    const idHorario = buscaHorario.rows[0].idhorario;

    // -- Sala --
    const buscaSala = await db.query(
      `SELECT numero FROM sala WHERE numero = $1`,
      [sala]
    );
    if (buscaSala.rowCount === 0) {
      return res.status(404).json({ message: "Sala não encontrada" });
    }
    const numeroSala = buscaSala.rows[0].numero;

    // -- Semana (Dia da semana) --
    const buscaSemana = await db.query(
      `SELECT idsemana FROM semana WHERE dia = $1`,
      [diaSemana]
    );
    if (buscaSemana.rowCount === 0) {
      return res.status(404).json({ message: "Dia da semana não encontrado" });
    }
    const idSemana = buscaSemana.rows[0].idsemana;

    // ✅ Update da aula
    await db.query(
        `UPDATE Aula
          SET
            Turma_idTurma = $1,
            Disciplina_idDisciplina = $2,
            Professor_idProfessor = $3,
            Horario_idHorario = $4,
            Sala_Numero = $5,
            Semana_idSemana = $6
          WHERE idAula = $7`,
       [idTurma, idDisciplina, idProfessor, Numero, idSemana, idHorario, idAula]
      );

    return res.status(200).json({
      message: "Aula atualizada com sucesso",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = secretariaUpdateAula;
