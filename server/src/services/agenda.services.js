const db = require("../config/db");
async function agenda (req, res) {
    try {
        const {turma, turno} = req
        const resultado = await db.query(
        `SELECT 
            A.idAula,
            T.idTurma,
            C.Nome AS Curso,
            T.Turno,
            H.HoraInicial,
            H.HoraFinal,
            S.Nome AS Sala,
            S.Andar,
            SM.Dia AS DiaSemana,
            D.Nome AS Disciplina,
            P.Nome AS Professor
        FROM Aula A
        JOIN Turma T ON A.Turma_idTurma = T.idTurma
        JOIN Curso C ON T.Curso_idCurso = C.idCurso
        JOIN Horario H ON A.Horario_idHorario = H.idHorario
        JOIN Sala S ON A.Sala_Numero = S.Numero
        JOIN Semana SM ON A.Semana_idSemana = SM.idSemana
        JOIN Disciplina D ON A.Disciplina_idDisciplina = D.idDisciplina
        JOIN Professor P ON A.Professor_idProfessor = P.idProfessor
        WHERE T.idTurma = $1 AND T.Turno = $2
        ORDER BY SM.idSemana, H.HoraInicial;
        `,
            [turma, turno]
        );
        res.json(resultado.rows);
    } catch (e) {
        res.status(500).json({
            message: "Erro ao processar requisição."
        })
    }
}
module.exports = agenda
