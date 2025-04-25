const { Router } = require("express");
const {  } = require("../controllers/ProfessorController");
const { insert, select, remove, update } = require("../controllers/professor");

const routes = Router();
routes.post("/", insert);
routes.get("/", select);
routes.delete("/", remove);
routes.put("/", update);


module.exports = routes;