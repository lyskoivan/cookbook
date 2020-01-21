const { Router } = require("express");
const {
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require("../controllers/cookbook");
const validate = require("../validation/cookbook");

const router = Router();

router.get("/", getAllRecipes);
router.post("/", validate.createRecipe, createRecipe);
router.put("/:id", validate.updateRecipe, updateRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router;
