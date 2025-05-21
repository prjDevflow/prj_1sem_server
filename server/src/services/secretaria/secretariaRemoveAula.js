async function secretariaRemoveAula(req, res) {
  try {
    const { idAula } = req;

    if (idAula) {
      // Insere os dados na tabela e retorna o registro criado
      const result = await db.query(
        "DELETE FROM aula WHERE idAula=$1",
        [idAula]
      );
      res.json(result.rows[0]);
    } else {
      res.status(400).json({ message: "O ID é necessário" });
    }
  } catch (e) {
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}

module.exports = secretariaRemoveAula
