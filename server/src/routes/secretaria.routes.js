const { Router } = require("express");
const adminRoute = Router();

const secretariaBuscaTurno = require("../services/secretaria/secretariaBuscaTurno.services");
const secretariaBuscaTurma = require("../services/secretaria/secretariaBuscaTurma.services");
const secretariaBuscaDia = require("../services/secretaria/secretariaBuscaDia.services");
const secretariaRemoveAula = require("../services/secretaria/secretariaRemoveAula");
const secretariaUpdateAula = require("../services/secretaria/secretariaUpdateAula");
const secretariaCriaAula = require("../services/secretaria/secretariaCriarAula.services");

// adminRoute.get("/buscaTurno", secretariaBuscaTurno);
// adminRoute.get("/buscaTurma", secretariaBuscaTurma);

adminRoute.post("/busca-turno", secretariaBuscaTurno);
adminRoute.post("/busca-turma", secretariaBuscaTurma);
adminRoute.get("/secretariaBuscaDia", secretariaBuscaDia);

adminRoute.delete("/remove-aula/:id", secretariaRemoveAula);
adminRoute.post("/secretariaCriaAula", secretariaCriaAula);
adminRoute.post("/secretariaUpdateAula", secretariaUpdateAula);

module.exports = adminRoute;
