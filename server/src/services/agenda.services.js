const db = require("../config/db");

async function agenda(req, res) {
    try {
        const { turma, turno } = req.body;

        const resultado = await db.query(
            `SELECT 
                A.idAula AS id,
                SM.Dia AS diaSemana,
                T.idTurma AS turma,
                T.Turno AS turno,
                D.Nome AS disciplina,
                CONCAT(H.HoraInicial, ' - ', H.HoraFinal) AS horario
            FROM Aula A
            JOIN Turma T ON A.Turma_idTurma = T.idTurma
            JOIN Horario H ON A.Horario_idHorario = H.idHorario
            JOIN Semana SM ON A.Semana_idSemana = SM.idSemana
            JOIN Disciplina D ON A.Disciplina_idDisciplina = D.idDisciplina
            WHERE T.idTurma = $1 AND T.Turno = $2
            ORDER BY SM.idSemana, H.HoraInicial;
            `,
            [turma, turno]
        );

        res.json(resultado.rows);
    } catch (e) {
        console.error("Erro ao buscar agenda:", e);
        res.status(500).json({
            message: "Erro ao processar requisição.",
        });
    }
}

module.exports = agenda;
