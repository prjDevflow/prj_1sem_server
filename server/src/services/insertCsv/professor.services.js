const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db"); // Conexão com o banco

async function addProfessor(req, res) {
  const client = await db.connect(); // Pega o client do pool

  try {
    const { file } = req;

    if (!file || !file.buffer) {
      return res.status(400).json({ message: "Arquivo não enviado corretamente" });
    }

    await client.query("TRUNCATE professor CASCADE");

    const readableFile = new Readable();
    readableFile.push(file.buffer);
    readableFile.push(null);

    const registerLine = readline.createInterface({
      input: readableFile,
      crlfDelay: Infinity,
    });

    let count = 0;

    for await (let line of registerLine) {
      if (!line.trim()) continue;

      const nome = line.trim();

      await client.query("INSERT INTO professor (nome) VALUES ($1)", [nome]);

      count++;
    }

    return res
      .status(200)
      .json({ message: `${count} professores cadastrados com sucesso.` });

  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erro ao cadastrar professores: " + err.message });
  } finally {
    client.release();
  }
}

module.exports = addProfessor;
