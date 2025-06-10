const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addCurso(req, res) {
  const client = await db.connect();

  try {
    const { file } = req;
    if (!file || !file.buffer) {
      return res.status(400).json({ message: "Arquivo não enviado corretamente" });
    }

    await client.query("TRUNCATE curso CASCADE;");

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

      if (lineSplit.length < 1) continue;

      const nome = lineSplit[0].trim();

      await client.query("INSERT INTO curso (nome) VALUES ($1)", [nome]);

      count++;
    }

    return res.status(200).json({ message: `${count} cursos cadastrados com sucesso.` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao cadastrar cursos: " + err.message });
  } finally {
    client.release();
  }
}

module.exports = addCurso;
