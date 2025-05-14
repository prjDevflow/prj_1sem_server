const { Router } = require("express");
const {  } = require("../controllers/mapa");
const {select } = require("../controllers/mapa");

const routes = Router();

routes.get("/", select);

module.exports = routes;