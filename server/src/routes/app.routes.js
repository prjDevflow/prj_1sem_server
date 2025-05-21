const { Router } = require("express");
const appRoute = Router();

const agenda = require("../services/agenda.services");
const login = require("../services/login.services");
const mapa = require("../services/mapa.services");
const buscaTurno = require("../services/buscaTurno.services");
const buscaTurma = require("../services/buscaTurma.services");


appRoute.post("/login", login);
appRoute.get("/agenda", agenda);
appRoute.get("/mapa", mapa);
appRoute.get("/buscaTurno", buscaTurno);
appRoute.get("/buscaTurma", buscaTurma);

module.exports = appRoute;
