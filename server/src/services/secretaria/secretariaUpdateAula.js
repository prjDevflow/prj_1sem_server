const db = require("../../config/db");

async function secretariaUpdateAula(req, res) {
  try {
    const idAula = req.params;

    const {
      turma, // já é o ID
      disciplina,
      professor,
      horario,
      sala,
      diaSemana,
    } = req.body;

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
      [turma, disciplina, professor, horario, sala, diaSemana, idAula]
    );

    return res.status(200).json({ message: "Aula atualizada com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
}

module.exports = secretariaUpdateAula;
