const { Router } = require("express");
const adminRoute = Router();

// const secretariaBuscaTurno = require("../services/secretaria/secretariaBuscaTurno.services");
// const secretariaBuscaTurma = require("../services/secretaria/secretariaBuscaTurma.services");
const secretariaBuscaDia = require("../services/secretaria/secretariaBuscaDia.services");
const secretariaRemoveAula = require("../services/secretaria/secretariaRemoveAula");
const secretariaUpdateAula = require("../services/secretaria/secretariaUpdateAula");

// adminRoute.get("/buscaTurno", secretariaBuscaTurno);
// adminRoute.get("/buscaTurma", secretariaBuscaTurma);

adminRoute.post("/busca-dia", secretariaBuscaDia);
adminRoute.put("/aula", secretariaUpdateAula);
adminRoute.delete("/aula/:id", secretariaRemoveAula);

module.exports = adminRoute;
