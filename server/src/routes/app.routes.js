const { Router } = require("express");
const appRoute = Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // caminho para guardar arquivos csv (ajustar)

// const addProfessor = require("../services/insertCsv/professor.services");
// const curso = require("../services/curso.services");
// const professor = require("../services/professor.services");
// const disciplina = require("../services/disciplina.services");
const buscaAgenda = require("../services/agenda.services");
const login = require("../services/login.services");

appRoute.post("/login", login);
appRoute.get("/agenda", buscaAgenda);
// route.use("/curso.services", curso); // desnecessário
// route.use("/professor.services", professor); // desnecessário
// route.use("/disciplina.services", disciplina); // desnecessário

module.exports = appRoute;
