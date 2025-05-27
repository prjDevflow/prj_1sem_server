const db = require("../config/db");
async function agenda(req, res) {
  try {
    const { turma, turno } = req.body;

    if (!turma || !turno) {
      return res.status(400).json({
        message: "Turma e turno obrigatórios",
      });
    }

    const resultado = await db.query(
      `SELECT 
        A."idaula",
        T."idturma",
        C."nome" AS "Curso",
        T."turno",
        H."horainicial",
        H."horafinal",
        S."nome" AS "sala",
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
        WHERE T."nome" = $1 AND T."turno" = $2
        ORDER BY SM."idsemana", H."horainicial";  
        `,
      [turma, turno]
    );
    res.json(resultado.rows);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Erro ao processar requisição.",
    });
  }
}
module.exports = agenda;
