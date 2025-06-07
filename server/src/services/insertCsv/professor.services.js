const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addProfessor(req, res) {
  const client = await db.connect();

  try {
    const { file } = req;
    if (!file || !file.buffer) {
      return res.status(400).json({ message: "Arquivo não enviado corretamente" });
    }

    const readableFile = new Readable();
    readableFile.push(file.buffer);
    readableFile.push(null);

    const registerLine = readline.createInterface({
      input: readableFile,
    });

    await client.query("BEGIN");
    await client.query("DELETE FROM professor");

    let count = 0;

    for await (let line of registerLine) {
      if (!line.trim()) continue; // ignora linhas em branco

      const lineSplit = line.split(";");

      if (lineSplit.length < 1) {
        await client.query("ROLLBACK");
        return res.status(400).json({ message: "Formato de arquivo inválido." });
      }

      const nome = lineSplit[0].trim();

      await client.query("INSERT INTO Professor (Nome) VALUES ($1)", [nome]);

      count++;
    }

    await client.query("COMMIT");

    return res.status(200).json({ message: `${count} professores cadastrados com sucesso.` });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error(err);
    return res.status(500).json({ message: "Erro ao cadastrar professores: " + err.message });
  } finally {
    client.release();
  }
}

module.exports = addProfessor;
