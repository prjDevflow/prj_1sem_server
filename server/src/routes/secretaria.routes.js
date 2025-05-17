const { Router } = require("express");
const appRoute = Router();

const secretariaBuscaTurno = require("../services/secretaria/secretariaBuscaTurno.services");
const secretariaBuscaTurma = require("../services/secretaria/secretariaBuscaTurma.services");
const secretariaBuscaDia = require("../services/secretaria/secretariaBuscaDia.services");


appRoute.get("/secretariaBuscaTurno", secretariaBuscaTurno);
appRoute.get("/secretariaBuscaTurma", secretariaBuscaTurma);
appRoute.get("/secretariaBuscaDia", secretariaBuscaDia);


module.exports = appRoute;
