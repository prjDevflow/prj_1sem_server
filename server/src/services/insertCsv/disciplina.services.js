const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addDisciplina(req, res) {
  const client = await db.connect();

  try {
    const { file } = req;
    if (!file || !file.buffer) {
      return res.status(400).json({ message: "Arquivo não enviado corretamente" });
    }

    // Limpa os dados existentes
    await client.query("TRUNCATE disciplina CASCADE;");

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

      await client.query("INSERT INTO disciplina (nome) VALUES ($1)", [nome]);

      count++;
    }

    return res.status(200).json({ message: `${count} disciplinas cadastradas com sucesso.` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao cadastrar disciplinas: " + err.message });
  } finally {
    client.release();
  }
}

module.exports = addDisciplina;
