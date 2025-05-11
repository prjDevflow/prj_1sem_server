const { Router } = require("express");
const routes = Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // caminho para guardar arquivos csv (ajustar)

const addProfessor = require("../services/insertCsv.services");
const curso = require("../services/curso.services");
const professor = require("../services/professor.services");
const disciplina = require("../services/disciplina.services");
const buscaAgenda = require("../services/agenda.services");
const login = require("../services/login.services");

routes.post("/insert-csv", upload.single("file"), addProfessor);

routes.post("/login", login);
routes.get("/agenda", buscaAgenda);
// routes.use("/curso.services", curso); // desnecessário
// routes.use("/professor.services", professor); // desnecessário
// routes.use("/disciplina.services", disciplina); // desnecessário

module.exports = routes;
