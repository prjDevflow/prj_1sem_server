const { Router } = require("express");
const appRoute = Router();

const agenda = require("../services/agenda.services");
const login = require("../services/login.services");
const mapa = require("../services/mapa.services");
const buscaTurno = require("../services/buscaTurno.services");
const buscaTurma = require("../services/buscaTurma.services");

appRoute.post("/login", login);
appRoute.post("/agenda", agenda);
appRoute.post("/mapa", mapa);
appRoute.post("/busca-turno", buscaTurno);

appRoute.post("/busca-turma", buscaTurma);

module.exports = appRoute;
