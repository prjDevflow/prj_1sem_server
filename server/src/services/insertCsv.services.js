const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const db = require("../config/db");

async function addProfessor(req, res) {
  const results = [];

  try {
    const filePath = req.file.path;

    if (!filePath) {
      return res.status(400).json({ message: "Nenhum arquivo enviado" });
    }

    // leitura arquivo csv
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data)) // add dados para array
      .on("end", async () => {
        try {
          for (const row of results) {
            await db.query("INSERT INTO Professor (Nome) VALUES ($1)", [row.Nome]);
          }
          res.status(200).json({
            message: `${results.length} professores cadastrados com sucesso`,
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Erro ao cadastrar dados no banco" });
        }
      });
  } catch (e) {
    // console.error(e);
    res.status(500).json({ message: "Erro ao processar requisição" });
  }
}

module.exports = addProfessor;
