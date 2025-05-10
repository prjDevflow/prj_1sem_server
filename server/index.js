const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// SERVICOS
const professor = require("./src/services/professor.services.js");
const curso = require("./src/services/curso.services.js");
const disciplina = require("./src/services/disciplina.services.js");
const addProfessor = require("./src/services/insertCsv.services.js")
// BANCO DE DADOS
const pool = require("./src/config/db.js");

dotenv.config();

const app = express();

const PORT = process.env.PORT_SERVER;

app.use(express.json());

app.use(cors());

app.post("/insert-csv", upload.single("file"), addProfessor);

app.use("/curso.services", curso);
app.use("/professor.services", professor);
app.use("/disciplina.services", disciplina);

async function testDBConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexão bem-sucedida:");
  } catch (err) {
    console.error("Erro na conexão com o banco:", err);
  }
}

// Inicia o servidor e escuta na porta definida
app.listen(PORT, function () {
  testDBConnection();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});