const { Router } = require("express");
const {  } = require("../controllers/agenda");
const {select} = require("../controllers/agenda");

const routes = Router();

routes.get("/", select);


module.exports = routes;