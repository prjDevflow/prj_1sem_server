const db = require("../../config/db");

async function secretariaUpdateAula(req, res) {
  try {
    const idAula = req.params.id;

    const {
      turma,
      disciplina,
      professor,
      horarioInicial,
      horarioFinal,
      sala,
      diaSemana,
    } = req.body;

    const aulaExiste = await db.query("SELECT * FROM aula WHERE idaula = $1", [
      idAula,
    ]);
    if (aulaExiste.rowCount === 0) {
      return res.status(404).json({ message: "Aula não encontrada" });
    }

    const buscaTurma = await db.query(
      "SELECT idturma FROM turma WHERE nome = $1",
      [turma]
    );
    if (buscaTurma.rowCount === 0)
      return res.status(404).json({ message: "Turma não encontrada" });
    const idTurma = buscaTurma.rows[0].idturma;

    const buscaDisciplina = await db.query(
      "SELECT iddisciplina FROM disciplina WHERE nome = $1",
      [disciplina]
    );
    if (buscaDisciplina.rowCount === 0)
      return res.status(404).json({ message: "Disciplina não encontrada" });
    const idDisciplina = buscaDisciplina.rows[0].iddisciplina;

    const buscaProfessor = await db.query(
      "SELECT idprofessor FROM professor WHERE nome = $1",
      [professor]
    );
    if (buscaProfessor.rowCount === 0)
      return res.status(404).json({ message: "Professor não encontrado" });
    const idProfessor = buscaProfessor.rows[0].idprofessor;

    const buscaHorario = await db.query(
      "SELECT idhorario FROM horario WHERE horainicial = $1 AND horafinal = $2",
      [horarioInicial, horarioFinal]
    );
    if (buscaHorario.rowCount === 0)
      return res.status(404).json({ message: "Horário não encontrado" });
    const idHorario = buscaHorario.rows[0].idhorario;

    const buscaSala = await db.query(
      "SELECT numero FROM sala WHERE numero = $1",
      [sala]
    );
    if (buscaSala.rowCount === 0)
      return res.status(404).json({ message: "Sala não encontrada" });
    const numeroSala = buscaSala.rows[0].numero;

    const buscaSemana = await db.query(
      "SELECT idsemana FROM semana WHERE dia = $1",
      [diaSemana]
    );
    if (buscaSemana.rowCount === 0)
      return res.status(404).json({ message: "Dia da semana não encontrado" });
    const idSemana = buscaSemana.rows[0].idsemana;

    await db.query(
      `UPDATE aula
       SET
         turma_idturma = $1,
         disciplina_iddisciplina = $2,
         professor_idprofessor = $3,
         horario_idhorario = $4,
         sala_numero = $5,
         semana_idsemana = $6
       WHERE idaula = $7`,
      [
        idTurma,
        idDisciplina,
        idProfessor,
        idHorario,
        numeroSala,
        idSemana,
        idAula,
      ]
    );

    return res.status(200).json({ message: "Aula atualizada com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
}

module.exports = secretariaUpdateAula;
