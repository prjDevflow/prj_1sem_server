const db = require("../../config/db");
async function secretariaBuscaTurno(req, res) {
  // try {
  //   const {curso} = req.body
  //   const result = await db.query(
  //   `SELECT DISTINCT 
  //       c.nome AS curso,
  //       t.turno
  //   FROM curso c
  //   JOIN turma t ON c.idcurso = t.curso_idcurso
  //   WHERE c.idcurso = $1
  //   ORDER BY 
  //   t.turno;`,
  //    [curso]
  //   );
  //   res.json(result.rows);
  // } catch (e) {
  //   res.status(500).json({ message: "Erro ao processar a requisição" });
  // }

  console.log("oi")
}
module.exports = secretariaBuscaTurno