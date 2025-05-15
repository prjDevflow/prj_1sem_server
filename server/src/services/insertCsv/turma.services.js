const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addTurma(req, res) {
  try {
    const { file } = req;
    if (!file || !file.buffer)
      throw new Error("arquivo não enviado corretamente");

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

      const nome = lineSplit[0].trim();
      const nomeCurso = lineSplit[1].trim();
      const turno = lineSplit[2].trim();

      const buscaCurso = await db.query(
        "SELECT idCurso FROM Curso WHERE Nome = $1",
        [nomeCurso]
      );

      if (buscaCurso.rows.length === 0) {
        throw new Error(`Curso '${nomeCurso}' não encontrado`);
      }

      const idCurso = buscaCurso.rows[0].idcurso;

      await db.query(
        "INSERT INTO Turma (nome, curso_id, turno) VALUES ($1, $2, $3)",
        [nome, idCurso, turno]
      );

      count++;
    }

    return res.status(200).json({ message: `${count} turmas cadastradas` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = addTurma;
