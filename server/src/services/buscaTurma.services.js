async function buscaTurma(req, res) {
  try {
    const {curso, turno} = req
    const result = await db.query(
    `SELECT 
        t.idTurma,
        t.Turno,
        c.Nome AS Curso
    FROM Turma t
    JOIN Curso c ON t.Curso_idCurso = c.idCurso
    WHERE t.Curso_idCurso = $1 AND t.Turno = $2
    ORDER BY t.idTurma;`,
     [curso, turno]
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = buscaTurma