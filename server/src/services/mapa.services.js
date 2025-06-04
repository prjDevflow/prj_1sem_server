const db = require("../config/db");

async function mapa(req, res) {
    try {
        const { salaNumero, diaSemana } = req.body;

        const resultado = await db.query(
            `SELECT 
                S.numero AS numerosala,
                SM.dia AS diasemana,
                T.idturma AS turma,
                H.horainicial,
                H.horafinal
            FROM aula A
            JOIN turma T ON A.turma_idturma = T.idturma
            JOIN horario H ON AhHorario_idhorario = H.idhorario
            JOIN sala S ON A.sala_numero = S.numero
            JOIN semana SM ON A.semana_idsemana = SM.idsemana
            WHERE 
                S.numero = $1 AND SM.dia = $2
            ORDER BY
                H.horainicial;`,
            [salaNumero, diaSemana]
        );

        res.json(resultado.rows);
    } catch (e) {
        console.error("Erro ao buscar reservas:", e);
        res.status(500).json({ message: "Erro ao processar requisição." });
    }
}

module.exports = mapa;
