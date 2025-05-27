const db = require("../config/db");
async function mapa(req, res) {
  try {
    const { sala, diaSemana } = req.body;

    if (!sala || !diaSemana) {
      return res.status(400).json({
        message: "Sala e dia da semana obrigatórios",
      });
    }

    const resultado = await db.query(
      `SELECT 
            A."idaula",
            T."idturma",
            C."nome" AS "curso",
            T."turno",
            H."horainicial",
            H."horafinal",
            S."numero" AS "numerosala",
            S."nome" AS "nomesala",
            S."andar",
            SM."dia" AS "diasemana",
            D."nome" AS "disciplina",
            P."nome" AS "professor"
            FROM "aula" A
            JOIN "turma" T ON A."turma_idturma" = T."idturma"
            JOIN "curso" C ON T."curso_idcurso" = C."idcurso"
            JOIN "horario" H ON A."horario_idhorario" = H."idhorario"
            JOIN "sala" S ON A."sala_numero" = S."numero"
            JOIN "semana" SM ON A."semana_idsemana" = SM."idsemana"
            JOIN "disciplina" D ON A."disciplina_iddisciplina" = D."iddisciplina"
            JOIN "professor" P ON A."professor_idprofessor" = P."idprofessor"
            WHERE S."numero" = $1 AND SM."dia" = $2
            ORDER BY SM."idsemana", H."horainicial";
        `,
      [sala, diaSemana]
    );

    res.json(resultado.rows);
  } catch (e) {
    console.error("Erro ao buscar reservas:", e);
    res.status(500).json({
      message: "Erro ao processar requisição.",
    });
  }
}

module.exports = mapa;
