const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addTurma(req, res) {
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
      if (!line.trim()) continue;

      const lineSplit = line.split(";");

      if (lineSplit.length < 3) {
        throw new Error(
          "Formato de arquivo inválido. Esperado: Nome;Curso;Turno"
        );
      }

      const nome = lineSplit[0].trim();
      const nomeCurso = lineSplit[1].trim();
      const turno = lineSplit[2].trim();

      const buscaCurso = await db.query(
        "SELECT idcurso FROM curso WHERE nome = $1",
        [nomeCurso]
      );

      if (buscaCurso.rowCount === 0) {
        throw new Error(`Curso '${nomeCurso}' não encontrado`);
      }

      const idCurso = buscaCurso.rows[0].idcurso;

      await db.query(
        "INSERT INTO turma (nome, curso_idcurso, turno) VALUES ($1, $2, $3)",
        [nome, idCurso, turno]
      );

      count++;
    }

    return res
      .status(200)
      .json({ message: `${count} turmas cadastradas com sucesso.` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}

module.exports = addTurma;
