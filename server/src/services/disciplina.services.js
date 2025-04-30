const { Router } = require("express");
const {  } = require("../controllers/disciplina");
const { insert, select, remove, update } = require("../controllers/disciplina");

const routes = Router();

routes.post("/", insert);
routes.get("/", select);
routes.delete("/", remove);
routes.put("/", update);


module.exports = routes;