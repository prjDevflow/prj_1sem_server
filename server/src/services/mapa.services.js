const db = require("../config/db");

async function mapa(req, res) {
  try {
    const { salaNome, diaSemana } = req.body;

    const resultado = await db.query(
      `SELECT 
      S.Numero AS numeroSala,
      SM.Dia AS diaSemana,
      T.Nome AS turma,
      T.Turno AS turno,
      D.Nome AS disciplina,
      H.HoraInicial,
      H.HoraFinal
  FROM Aula A
  JOIN Turma T ON A.Turma_idTurma = T.idTurma
  JOIN Horario H ON A.Horario_idHorario = H.idHorario
  JOIN Sala S ON A.Sala_Numero = S.Numero
  JOIN Semana SM ON A.Semana_idSemana = SM.idSemana
  JOIN Disciplina D ON A.Disciplina_idDisciplina = D.idDisciplina
  WHERE 
      S.Nome = $1 AND SM.Dia = $2
  ORDER BY
      H.HoraInicial;
  `,
      [salaNome, diaSemana]
    );

    res.json(resultado.rows);
  } catch (e) {
    console.error("Erro ao buscar reservas:", e);
    res.status(500).json({ message: "Erro ao processar requisição." });
  }
}

module.exports = mapa;
