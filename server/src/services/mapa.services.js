const db = require("../config/db");

async function mapa(req, res) {
    try {
        const { salaNumero, diaSemana } = req.body;

        const resultado = await db.query(
            `SELECT 
                S.Numero AS numeroSala,
                SM.Dia AS diaSemana,
                T.idTurma AS turma,
                H.HoraInicial,
                H.HoraFinal
            FROM Aula A
            JOIN Turma T ON A.Turma_idTurma = T.idTurma
            JOIN Horario H ON A.Horario_idHorario = H.idHorario
            JOIN Sala S ON A.Sala_Numero = S.Numero
            JOIN Semana SM ON A.Semana_idSemana = SM.idSemana
            WHERE 
                S.Numero = $1 AND SM.Dia = $2
            ORDER BY
                H.HoraInicial;`,
            [salaNumero, diaSemana]
        );

        res.json(resultado.rows);
    } catch (e) {
        console.error("Erro ao buscar reservas:", e);
        res.status(500).json({ message: "Erro ao processar requisição." });
    }
}

module.exports = mapa;
