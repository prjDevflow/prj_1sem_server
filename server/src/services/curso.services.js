const { Router } = require("express");
const {  } = require("../controllers/curso");
const { insert, select, remove, update } = require("../controllers/curso");

const routes = Router();
routes.post("/", insert);
routes.get("/", select);
routes.delete("/", remove);
routes.put("/", update);


module.exports = routes;