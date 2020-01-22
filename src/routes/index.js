const { Router } = require("express");
const route = Router();

const cookbook = require("./cookbook_routes");
const old_recipe = require("./old_recipe_routes");

route.use("/recipes", cookbook);
route.use("/old", old_recipe);

module.exports = route;
