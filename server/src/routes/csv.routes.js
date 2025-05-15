const { Router } = require("express");
const csvRoute = Router();
const multer = require("multer");
const upload = multer();

const addProfessor = require("../services/insertCsv/professor.services");
const addDisciplina = require("../services/insertCsv/disciplina.services");
const addCurso = require("../services/insertCsv/curso.services");
const addTurma = require("../services/insertCsv/turma.services");
const addAula = require("../services/insertCsv/aula.services");
const addSala = require("../services/insertCsv/sala.services");

csvRoute.post("/professor", upload.single("file"), addProfessor);
csvRoute.post("/disciplina", upload.single("file"), addDisciplina);
csvRoute.post("/curso", upload.single("file"), addCurso);
csvRoute.post("/turma", upload.single("file"), addTurma);
csvRoute.post("/aula", upload.single("file"), addAula);
csvRoute.post("/sala", upload.single("file"), addSala);

module.exports = csvRoute;
