const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const routes = require("./src/routes/app.routes.js");

// SERVICOS
const professor = require("./src/services/professor.services.js");
const curso = require("./src/services/curso.services.js");
const disciplina = require("./src/services/disciplina.services.js");
const addProfessor = require("./src/services/insertCsv.services.js");
const agenda = require("./src/services/agenda.services.js");

// CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT_SERVER;

// ROTAS
app.use("/", routes);

// INICIA SERVIDOR
app.listen(PORT, function () {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
