const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addSala(req, res) {
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
      if (lineSplit.length < 3) {
        throw new Error("Formato de arquivo inválido");
      }
      const numero = lineSplit[0].trim();
      const nome = lineSplit[1].trim();
      const andar = lineSplit[2].trim();

      result = await db.query(
        "INSERT INTO Sala (numero, nome, andar) VALUES ($1, $2, $3)",
        [numero, nome, andar]
      );

      count++;
    }

    return res.status(200).json({ message: `${count} cursos cadastrados` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = addSala;
