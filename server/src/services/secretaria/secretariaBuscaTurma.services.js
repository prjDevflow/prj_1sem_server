async function secretariaBuscaTurma(req, res) {
  try {
    const { curso, turno } = req;
    const result = await db.query(
      `SELECT 
        t.idturma,
        t.turno,
        c.nome AS curso
    FROM turma t
    JOIN curso c ON t.curso_idcurso = c.idcurso
    WHERE t.curso_idcurso = $1 AND t.turno = $2
    ORDER BY t.idturma;`,
      [curso, turno]
    );

    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = secretariaBuscaTurma;
