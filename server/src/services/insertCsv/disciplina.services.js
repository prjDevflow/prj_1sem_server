const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addDisciplina(req, res) {
  try {
    const { file } = req;
    if (!file || !file.buffer)
      throw new Error("Arquivo não enviado corretamente");

    const readableFile = new Readable();
    readableFile.push(file.buffer);
    readableFile.push(null);

    const registerLine = readline.createInterface({
      input: readableFile,
    });

    let count = 0;

    for await (let line of registerLine) {
      const lineSplit = line.split(";");
      if (lineSplit.length < 1) {
        throw new Error("Formato de arquivo inválido");
      }
      const nome = lineSplit[0].trim();

      result = await db.query("INSERT INTO Disciplina (Nome) VALUES ($1)", [
        nome,
      ]);

      count++;
    }

    return res
      .status(200)
      .json({ message: `${count} disciplinas cadastradas` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = addDisciplina;
