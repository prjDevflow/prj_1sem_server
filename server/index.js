const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const appRoute = require("./src/routes/app.routes.js");
const csvRoute = require("./src/routes/csv.routes.js");

// CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT_SERVER;

// ROTAS
app.use("/", appRoute);
app.use("/csv", csvRoute);

// INICIA SERVIDOR
app.listen(PORT, function () {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
