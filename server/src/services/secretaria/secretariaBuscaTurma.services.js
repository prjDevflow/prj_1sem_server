const db = require("../../config/db");
async function secretariaBuscaTurno(req, res) {
  try {
    const {
      curso,
      turno
    } = req.body;
    console.log('Recebido curso:', curso);
    const result = await db.query(
      ` SELECT 
    a.idAula,
    c.Nome AS Curso,
    t.Nome AS Turma,
    t.Turno,
    d.Nome AS Disciplina,
    p.Nome AS Professor,
    s.Nome AS Sala,
    s.Andar,
    sem.Dia AS DiaSemana,
    h.HoraInicial,
    h.HoraFinal
FROM Aula a
JOIN Turma t ON a.Turma_idTurma = t.idTurma
JOIN Curso c ON t.Curso_idCurso = c.idCurso
JOIN Disciplina d ON a.Disciplina_idDisciplina = d.idDisciplina
JOIN Professor p ON a.Professor_idProfessor = p.idProfessor
JOIN Sala s ON a.Sala_Numero = s.Numero
JOIN Semana sem ON a.Semana_idSemana = sem.idSemana
JOIN Horario h ON a.Horario_idHorario = h.idHorario
WHERE c.Nome = $1
  AND t.Turno = $2
`,
      [curso, turno]
    );
    console.log("result: ", result)
    res.json(result.rows);

    const nomesTurmas = rows.map(({
      nome_turma
    }) => nome_turma);

    console.log(nomesTurmas);

  } catch (e) {

    res.status(500).json({
      message: "Erro ao processar a requisição"
    });
  }
}
module.exports = secretariaBuscaTurno