const db = require("../../config/db");

async function secretariaRemoveAula(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "O ID da aula é necessário" });
    }

    // Verificar se a aula existe
    const aulaExiste = await db.query("SELECT * FROM aula WHERE idaula = $1", [
      id,
    ]);

    if (aulaExiste.rowCount === 0) {
      return res.status(404).json({ message: "Aula não encontrada" });
    }

    // Deletar a aula
    const result = await db.query("DELETE FROM aula WHERE idaula = $1", [id]);

    return res.status(200).json({
      message: "Aula removida com sucesso",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erro ao processar a requisição" });
  }
}

module.exports = secretariaRemoveAula;
