const { Router } = require("express");
const {  } = require("../controllers/curso");
const { insert, select, remove, update, buscaGrade } = require("../controllers/curso");

const routes = Router();

// routes.post("/", insert);
// routes.get("/", select);
// routes.delete("/", remove);
// routes.put("/", update);

routes.post("/busca", buscaGrade);


module.exports = routes;