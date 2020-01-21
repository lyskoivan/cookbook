const { Router } = require("express");
const route = Router();

const cookbook = require("./cookbook_routes");

route.use("/recipes", cookbook);

module.exports = route;
