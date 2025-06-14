const db = require("../config/db");

async function agenda(req, res) {
  try {
    const { turma, turno } = req.body;

    const resultado = await db.query(
      `SELECT 
            A.idaula AS id,
            SM.dia AS diasemana,
            T.nome AS turma,
            T.turno AS turno,
            D.nome AS disciplina,
            P.nome AS professor,
            CONCAT(H.horainicial, ' - ', H.horafinal) AS horario
        FROM aula A
        JOIN turma T ON A.turma_idturma = T.idturma
        JOIN horario H ON A.horario_idhorario = H.idhorario
        JOIN semana SM ON A.semana_idsemana = SM.idsemana
        JOIN disciplina D ON A.disciplina_iddisciplina = D.iddisciplina
        JOIN professor P ON A.professor_idprofessor = P.idprofessor
        WHERE T.nome = $1 AND T.turno = $2
        ORDER BY SM.idsemana, H.horainicial;
            `,
      [turma, turno]
    );

    res.json(resultado.rows);
    console.log("sucesso");
  } catch (e) {
    console.error("Erro ao buscar agenda:", e);
    res.status(500).json({
      message: "Erro ao processar requisição.",
    });
  }
}
module.exports = agenda;
