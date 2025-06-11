const { Router } = require("express");
const adminRoute = Router();

const secretariaBuscaTurno = require("../services/secretaria/secretariaBuscaTurno.services");
const secretariaBuscaTurma = require("../services/secretaria/secretariaBuscaTurma.services");
const secretariaBuscaDia = require("../services/secretaria/secretariaBuscaDia.services");
const secretariaRemoveAula = require("../services/secretaria/secretariaRemoveAula");
const secretariaUpdateAula = require("../services/secretaria/secretariaUpdateAula");
const secretariaCriaAula = require("../services/secretaria/secretariaCriarAula.services");
const buscaGeral = require("../services/secretaria/secretariaBuscaGeral.services");

// adminRoute.get("/buscaTurno", secretariaBuscaTurno);
// adminRoute.get("/buscaTurma", secretariaBuscaTurma);

adminRoute.post("/busca-turno", secretariaBuscaTurno);
adminRoute.post("/busca-turma", secretariaBuscaTurma);
adminRoute.post("/busca-dia", secretariaBuscaDia);
adminRoute.delete("/secretariaRemoveAula", secretariaRemoveAula);
adminRoute.post("/secretariaUpdateAula", secretariaUpdateAula);
adminRoute.post("/cria-aula", secretariaCriaAula);

module.exports = adminRoute;


adminRoute.get("/busca-disciplinas", buscaGeral.buscarDisciplinas);
adminRoute.get("/busca-professores", buscaGeral.buscarProfessores);
adminRoute.get("/busca-salas", buscaGeral.buscarSalas);
adminRoute.get("/busca-horarios", buscaGeral.buscarHorarios);
adminRoute.get("/busca-turmas", buscaGeral.buscarTurmas);

