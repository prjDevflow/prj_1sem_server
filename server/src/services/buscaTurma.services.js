async function buscaTurma(req, res) {
  try {
    const {curso, turno} = req
    const result = await db.query(
    `SELECT
    json_object_agg(Turno, TurmasArray)
    FROM (SELECT t.Turno,json_agg(t.Nome ORDER BY t.Nome) AS TurmasArray
    FROM Turma t
    JOIN Curso c ON t.Curso_idCurso = c.idCurso
    WHERE c.Nome = 'Meio Ambiente e Recursos Hídricos' 
    GROUP BY t.Turno 
) AS Subquery;`,
     [curso, turno]
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = buscaTurma