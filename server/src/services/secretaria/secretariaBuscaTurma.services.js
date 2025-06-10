const db = require("../../config/db");
async function secretariaBuscaTurma(req, res) {
  try {
    const {
      curso,
      turno,
      dia
    } = req.body;
    console.log('Recebido curso:', curso);
    const result = await db.query(
      ` SELECT 
    A.idAula,
    T.Nome AS NomeTurma,
    C.Nome AS NomeCurso,
    T.Turno,
    H.HoraInicial,
    H.HoraFinal,
    S.Nome AS NomeSala,
    S.Andar,
    D.Nome AS NomeDisciplina,
    P.Nome AS NomeProfessor,
    Sem.Dia AS DiaSemana
FROM Aula A
JOIN Turma T ON A.Turma_idTurma = T.idTurma
JOIN Curso C ON T.Curso_idCurso = C.idCurso
JOIN Horario H ON A.Horario_idHorario = H.idHorario
JOIN Sala S ON A.Sala_Numero = S.Numero
JOIN Disciplina D ON A.Disciplina_idDisciplina = D.idDisciplina
JOIN Professor P ON A.Professor_idProfessor = P.idProfessor
JOIN Semana Sem ON A.Semana_idSemana = Sem.idSemana
WHERE 
    C.Nome = $1 AND
    T.Turno = $2 AND
    Sem.Dia = $3
ORDER BY H.HoraInicial;

`,
      [curso, turno, dia]
    );
    console.log("result: ", result)
    res.json(result.rows);

    const nomesTurmas = rows.map(({
      nome_turma
    }) => nome_turma);

    console.log(nomesTurmas);

    console.log("result: ", result)

  } catch (e) {
    
    res.status(500).json({
      message: "Erro ao processar a requisição"
    });
  }
}
module.exports = secretariaBuscaTurma