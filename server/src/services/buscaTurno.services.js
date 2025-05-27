const db = require("../config/db");

async function buscaTurno(req, res) {
  try {
    const { curso } = req.body;

    // Verificar se o curso existe
    const cursoExiste = await db.query(
      `SELECT * FROM "curso" WHERE "nome" = $1`,
      [curso]
    );

    if (cursoExiste.rowCount === 0) {
      return res.status(404).json({ message: "Curso não encontrado" });
    }

    const turnos = await db.query(
      `SELECT DISTINCT t."turno"
       FROM "turma" t
       JOIN "curso" c ON t."curso_idcurso" = c."idcurso"
       WHERE LOWER(c."nome") = LOWER($1)
       ORDER BY t."turno";`,
      [curso]
    );
    res.json(turnos.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = buscaTurno;
