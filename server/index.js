const express = require("express");
const cors = require("cors");
require("dotenv/config");

const routes = require("./src/services/professor.services.js");

const app = express();
const port = process.env.PORT_SERVER;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/prof", routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
