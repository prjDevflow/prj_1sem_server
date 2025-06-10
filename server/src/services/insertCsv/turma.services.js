const { Readable } = require("stream");
const readline = require("readline");
const db = require("../../config/db");

async function addTurma(req, res) {
  const client = await db.connect();

  try {
    const { file } = req;
    if (!file || !file.buffer) {
      return res.status(400).json({ message: "Arquivo não enviado corretamente" });
    }

    await client.query("TRUNCATE turma CASCADE;");

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
        return res.status(400).json({
          message: "Formato de arquivo inválido. Esperado: Nome;Curso;Turno"
        });
      }

      const nome = lineSplit[0].trim();
      const nomeCurso = lineSplit[1].trim();
      const turno = lineSplit[2].trim();

      const buscaCurso = await client.query(
        "SELECT idcurso FROM curso WHERE nome = $1",
        [nomeCurso]
      );

      if (buscaCurso.rowCount === 0) {
        return res.status(404).json({ message: `Curso '${nomeCurso}' não encontrado.` });
      }

      const idCurso = buscaCurso.rows[0].idcurso;

      await client.query(
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
    return res.status(500).json({ message: "Erro ao cadastrar turmas: " + err.message });
  } finally {
    client.release();
  }
}

module.exports = addTurma;
