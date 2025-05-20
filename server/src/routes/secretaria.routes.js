const { Router } = require("express");
const appRoute = Router();

const secretariaBuscaTurno = require("../services/secretaria/secretariaBuscaTurno.services");
const secretariaBuscaTurma = require("../services/secretaria/secretariaBuscaTurma.services");
const secretariaBuscaDia = require("../services/secretaria/secretariaBuscaDia.services");
const secretariaRemoveAula = require("../services/secretaria/secretariaRemoveAula");
const secretariaUpdateAula = require("../services/secretaria/secretariaUpdateAula");


appRoute.get("/secretariaBuscaTurno", secretariaBuscaTurno);
appRoute.get("/secretariaBuscaTurma", secretariaBuscaTurma);
appRoute.get("/secretariaBuscaDia", secretariaBuscaDia);
appRoute.delete("/secretariaRemoveAula", secretariaRemoveAula);
appRoute.post("/secretariaUpdateAula", secretariaUpdateAula);


module.exports = appRoute;
