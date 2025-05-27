const db = require("../config/db");

async function buscaTurma(req, res) {
  try {
    const { curso, turno } = req.body;

    const cursoExiste = await db.query(
      `SELECT * FROM "curso" WHERE "nome" = $1`,
      [curso]
    );

    if (cursoExiste.rowCount === 0) {
      return res.status(404).json({ message: "Curso não encontrado" });
    }

    const result = await db.query(
      `SELECT DISTINCT 
          t."idturma",
          t."nome" AS "turma",
          t."turno"
       FROM "turma" t
       JOIN "curso" c ON t."curso_idcurso" = c."idcurso"
       WHERE 
         c."nome" = $1
         AND t."turno" = $2
       ORDER BY t."nome";`,
      [curso, turno]
    );
    res.json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = buscaTurma;
