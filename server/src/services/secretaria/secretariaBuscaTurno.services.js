const db = require("../../config/db");

async function secretariaBuscaTurno(req, res) {
  try {
    const { curso } = req.body;
    const result = await db.query(
      `SELECT DISTINCT 
      c.nome AS curso,
      t.turno
   FROM curso c
   JOIN turma t ON c.idcurso = t.curso_idcurso
   WHERE c.nome = $1
   ORDER BY t.turno;`,
      [curso]
    );
    res.json(result.rows);
    //console.log("result: ", result)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = secretariaBuscaTurno;
