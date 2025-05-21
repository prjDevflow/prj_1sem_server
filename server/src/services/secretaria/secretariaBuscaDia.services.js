async function secretariaBuscaDia(req, res) {
  try {
    const {curso, turma, turno, dia} = req
    const result = await db.query(
    `SELECT DISTINCT
    d.idDisciplina,
    d.Nome AS Disciplina,
    p.Nome AS Professor,
    h.HoraInicial,
    h.HoraFinal,
    s.Nome AS Sala,
    s.Numero AS NumeroSala
FROM 
    Aula a
JOIN 
    Disciplina d ON a.Disciplina_idDisciplina = d.idDisciplina
JOIN 
    Professor p ON a.Professor_idProfessor = p.idProfessor
JOIN 
    Horario h ON a.Horario_idHorario = h.idHorario
JOIN 
    Sala s ON a.Sala_Numero = s.Numero
JOIN 
    Semana w ON a.Semana_idSemana = w.idSemana
JOIN 
    Turma t ON a.Turma_idTurma = t.idTurma
JOIN 
    Curso c ON t.Curso_idCurso = c.idCurso
WHERE 
    c.idCurso = $1
    AND t.idTurma = $2
    AND t.Turno = $3
    AND w.Dia =  $4
ORDER BY 
    d.Nome, h.HoraInicial;`,
     [curso, turma, turno, dia]
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = secretariaBuscaDia