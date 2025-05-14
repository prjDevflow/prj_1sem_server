const db = require("../config/db");
async function select(req, res) {
    try {
        const { salaNumero, turma, turno, diaSemana } = req;

        const resultado = await db.query(
            `SELECT 
                r.idReserva, 
                a.idAula, 
                d.Nome AS Disciplina, 
                p.Nome AS Professor, 
                t.idTurma, 
                t.Turno, 
                s.Numero AS SalaNumero, 
                s.Nome AS SalaNome, 
                s.Andar AS SalaAndar, 
                h.HoraInicial, 
                h.HoraFinal, 
                sem.Dia AS DiaSemana 
            FROM Reserva r 
            JOIN Aula a ON r.Aula_idAula = a.idAula 
            JOIN Professor p ON a.Professor_idProfessor = p.idProfessor 
            JOIN Disciplina d ON a.Disciplina_idDisciplina = d.idDisciplina 
            JOIN Turma t ON a.Turma_idTurma = t.idTurma 
            JOIN Sala s ON r.Sala_Numero = s.Numero 
            JOIN Horario h ON r.Horario_IdHorario = h.idHorario 
            JOIN Semana sem ON r.Semana_idSemana = sem.idSemana 
            WHERE s.Numero = $1 AND t.idTurma = $2 AND t.Turno = $3 AND sem.Dia = $4
            ORDER BY sem.idSemana, h.HoraInicial;`,
            [salaNumero, turma, turno, diaSemana]
        );

        res.json(resultado.rows);
    } catch (e) {
        console.error("Erro ao buscar reservas:", e);
        res.status(500).json({
            message: "Erro ao processar requisição."
        });
    }
}

module.exports = {
    select
}