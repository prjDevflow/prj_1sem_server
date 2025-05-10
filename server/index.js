// Importa os módulos necessários
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const login = require("./src/services/login.services.js");
const professor = require("./src/services/professor.services.js");
const curso = require("./src/services/curso.services.js");
const disciplina = require("./src/services/disciplina.services.js");

const pool = require("./src/config/db.js");

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Instancia a aplicação Express
const app = express();

// Define a porta que será usada pelo servidor
const PORT = process.env.PORT || 3333;

// Configuração mais robusta do CORS
const corsOptions = {
  origin: ['http://localhost:3333', 'http://127.0.0.1:5500'], // Adicione todas as origens permitidas
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Aplica o middleware CORS
app.use(cors(corsOptions));

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rotas da aplicação
app.use("/login", login);
app.use("/curso.services", curso);
app.use("/professor.services", professor);
app.use("/disciplina.services", disciplina);

// Rota de teste
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Servidor operacional" });
});

// Teste de conexão com o banco de dados
async function testDBConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexão bem-sucedida:", res.rows[0]);
  } catch (err) {
    console.error("Erro na conexão com o banco:", err);
  }
}

// Middleware para rotas não encontradas
app.use(function(req, res) {
  res.status(404).json({ message: "Recurso inexistente" });
});

// Inicia o servidor e escuta na porta definida
app.listen(PORT, function() {
  // testDBConnection();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});