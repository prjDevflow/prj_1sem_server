const db = require("../config/db");

async function buscaTurma(req, res) {
  try {
    const { curso } = req.body;

    const cursoExiste = await db.query(
      `SELECT * FROM "curso" WHERE "nome" = $1`,
      [curso]
    );

    if (cursoExiste.rowCount === 0) {
      return res.status(404).json({ message: "Curso não encontrado" });
    }

    const result = await db.query(
      `
      SELECT
        json_object_agg(t."turno", turmas) AS resultado
      FROM (
        SELECT
          t."turno",
          json_agg(t."nome" ORDER BY t."nome") AS turmas
        FROM "turma" t
        JOIN "curso" c ON t."curso_idcurso" = c."idcurso"
        WHERE c."nome" = $1
        GROUP BY t."turno"
      ) AS t
      `,
      [curso]
    );

    const json = result.rows[0].resultado;
    res.json(json);
    console.log(json);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}

module.exports = buscaTurma;
