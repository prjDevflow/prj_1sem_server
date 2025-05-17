async function buscaTurno(req, res) {
  try {
    const {curso} = req
    const result = await db.query(
    `SELECT DISTINCT 
        c.Nome AS Curso,
        t.Turno
    FROM Curso c
    JOIN Turma t ON c.idCurso = t.Curso_idCurso
    WHERE c.idCurso = $1
    ORDER BY 
    t.Turno;`,
     [curso]
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = buscaTurno