const { Router } = require("express");

const { get_recipe } = require("../controllers/old_recipe");

const router = Router();

router.get("/:id", get_recipe);

module.exports = router;
