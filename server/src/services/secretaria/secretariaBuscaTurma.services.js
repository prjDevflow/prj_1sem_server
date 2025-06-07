const db = require("../../config/db");
async function secretariaBuscaTurno(req, res) {
  try {
    const {curso, turno} = req.body;
    console.log('Recebido curso:', curso);
    const result = await db.query(
      ` SELECT 
  Turma.idTurma,
  Turma.Nome AS nome_turma,
  Turma.Turno,
  Curso.Nome AS nome_curso
FROM Turma
JOIN Curso ON Turma.Curso_idCurso = Curso.idCurso
WHERE Curso.Nome = $1
  AND Turma.Turno = $2;
`,
      [curso, turno]
    );
    console.log("result: ", result)
    res.json(result.rows);

const nomesTurmas = rows.map(({ nome_turma }) => nome_turma);

console.log(nomesTurmas);

  } catch (e) {
    
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = secretariaBuscaTurno
