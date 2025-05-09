const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

async function insertCsv(req, res) {
  const results = [];

  try {
    if (!req.file) {
      return res.status(400).json({ message: "Nenhum arquivo enviado." });
    }

    const filePath = req.file.path;

    // lê arquivo csv
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data)) // add dados para araay
      .on("end", async() => {
       try {
          // ----> EXEMPLO: inserindo cada linha no banco
          for (const row of results) {
            await db.query(
              "INSERT INTO sua_tabela (nome, email, idade, cidade, status) VALUES ($1, $2, $3, $4, $5)",
              [row.nome, row.email, row.idade, row.cidade, row.status]
            );
          }

          res.status(200).json({ message: "CSV importado com sucesso!", total: results.length });
        } catch (dbError) {
          console.error("Erro ao inserir no banco:", dbError);
          res.status(500).json({ message: "Erro ao inserir no banco" });
        }
      });

      
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erro ao processar requisição" });
  }
}

module.exports = insertCsv;
