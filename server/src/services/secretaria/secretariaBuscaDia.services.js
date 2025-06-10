const db = require("../../config/db");

async function secretariaBuscaDia(req, res) {
  try {
    const { curso, turma, turno, dia } = req.body;
    const result = await db.query(
      `SELECT DISTINCT
      a.idaula,
      d.nome AS disciplina,
      p.nome AS professor,
      h.horainicial,
      h.horafinal,
      s.nome AS sala,
      s.numero AS numerosala
    FROM aula a
    JOIN disciplina d ON a.disciplina_iddisciplina = d.iddisciplina
    JOIN professor p ON a.professor_idprofessor = p.idprofessor
    JOIN horario h ON a.horario_idhorario = h.idhorario
    JOIN sala s ON a.sala_numero = s.numero
    JOIN semana w ON a.semana_idsemana = w.idsemana
    JOIN turma t ON a.turma_idturma = t.idturma
    JOIN curso c ON t.curso_idcurso = c.idcurso
    WHERE 
      c.nome = $1 AND
      t.nome = $2 AND
      t.turno = $3 AND
      w.dia = $4
    ORDER BY h.horainicial;`,
      [curso, turma, turno, dia]
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}
module.exports = secretariaBuscaDia;
