const db = require("../config/db");
async function mapa (req, res) {
    try {
        const { salaNumero, diaSemana } = req;

        const resultado = await db.query(
            `SELECT 
                A.idAula,
                T.idTurma,
                C.Nome AS Curso,
                T.Turno,
                H.HoraInicial,
                H.HoraFinal,
                S.Numero AS NumeroSala,
                S.Nome AS NomeSala,
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
            WHERE 
                S.Numero = $1 AND SM.Dia = $2
            ORDER BY
                SM.idSemana, H.HoraInicial;`,
            [salaNumero, diaSemana]
        );

        res.json(resultado.rows);
    } catch (e) {
        console.error("Erro ao buscar reservas:", e);
        res.status(500).json({
            message: "Erro ao processar requisição."
        });
    }
}

module.exports = mapa