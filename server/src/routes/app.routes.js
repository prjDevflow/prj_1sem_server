const { Router } = require("express");
const appRoute = Router();

const agenda = require("../services/agenda.services");
const login = require("../services/login.services");
const mapa = require("../services/mapa.services");

appRoute.post("/login", login);
appRoute.get("/agenda", agenda);
appRoute.get("/mapa", mapa);


module.exports = appRoute;
