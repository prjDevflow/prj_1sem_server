const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addSala(req, res) {
  const client = await db.connect();

  try {
    const { file } = req;
    if (!file || !file.buffer) {
      return res.status(400).json({ message: "Arquivo não enviado corretamente" });
    }

    await client.query("TRUNCATE sala CASCADE;");

    const readableFile = new Readable();
    readableFile.push(file.buffer);
    readableFile.push(null);

    const registerLine = readline.createInterface({
      input: readableFile,
    });

    let count = 0;

    for await (let line of registerLine) {
      if (!line.trim()) continue;

      const lineSplit = line.split(";");

      if (lineSplit.length < 2) {
        return res.status(400).json({ message: "Formato de arquivo inválido. Esperado: Nome;Andar" });
      }

      const nome = lineSplit[0].trim();
      const andar = lineSplit[1].trim();

      await client.query(
        "INSERT INTO sala (nome, andar) VALUES ($1, $2)",
        [nome, andar]
      );

      count++;
    }

    return res.status(200).json({ message: `${count} salas cadastradas com sucesso.` });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao cadastrar salas: " + err.message });
  } finally {
    client.release();
  }
}

module.exports = addSala;
