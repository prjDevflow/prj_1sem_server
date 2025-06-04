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
        json_object_agg(t."Turno", turmas) AS resultado
      FROM (
        SELECT
          t."Turno",
          json_agg(t."Nome" ORDER BY t."Nome") AS turmas
        FROM "Turma" t
        JOIN "Curso" c ON t."Curso_idCurso" = c."idCurso"
        WHERE c."Nome" = $1
        GROUP BY t."Turno"
      ) AS t
      `,
      [curso]
    );

    const json = result.rows[0].resultado;
    res.json(json);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}

module.exports = buscaTurma;
