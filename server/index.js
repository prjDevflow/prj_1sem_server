// Importa os módulos necessários
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const professor = require("./src/services/professor.services.js");
const curso = require("./src/services/curso.services.js");
const disciplina = require("./src/services/disciplina.services.js");
const agenda = require("./src/services/agenda.services.js");

const pool = require("./src/config/db.js");

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Instancia a aplicação Express
const app = express();

// Define a porta que será usada pelo servidor
const PORT = process.env.PORT || 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());


app.use("/curso.services", curso);
app.use("/professor.services", professor);
app.use("/disciplina.services", disciplina);
app.use("/agenda.services", agenda);

async function testDBConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexão bem-sucedida:", res.rows[0]);
  } catch (err) {
    console.error("Erro na conexão com o banco:", err);
  }
}

app.use(function(req, res){
  res.status(404).json({message:"Recurso inexistente"})
});

// Inicia o servidor e escuta na porta definida
app.listen(PORT, function () {
  testDBConnection();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});