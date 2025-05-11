const db = require("../config/db");

async function buscaAgenda(req, res) {
  try {
    const resultado = await db.query(
      "SELECT r.idReserva, a.idAula, d.Nome AS Disciplina, p.Nome AS Professor, t.idTurma, t.Turno, s.Numero AS SalaNumero, s.Nome AS SalaNome, s.Andar AS SalaAndar, h.HoraInicial, h.HoraFinal, sem.Dia AS DiaSemana FROM Reserva r JOIN Aula a ON r.Aula_idAula = a.idAula JOIN Professor p ON a.Professor_idProfessor = p.idProfessor JOIN Disciplina d ON a.Disciplina_idDisciplina = d.idDisciplina JOIN Turma t ON a.Turma_idTurma = t.idTurma JOIN Sala s ON r.Sala_Numero = s.Numero JOIN Horario h ON r.Horario_IdHorario = h.idHorario JOIN Semana sem ON r.Semana_idSemana = sem.idSemana WHERE t.idturma = '2DSM' AND t.Turno = 'Noturno' ORDER BY sem.idSemana, h.HoraInicial;"
    );
    res.json(resultado.rows);
  } catch (e) {
    res.status(500).json({
      message: "Erro ao processar requisição.",
    });
  }
}
module.exports = buscaAgenda;
