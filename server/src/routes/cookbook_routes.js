const { Router } = require("express");
const {
  // getAllRecipes,
  createRecipe
  // updateRecipe,
  // deleteRecipe
} = require("../controllers/cookbook");
const vaildate = require("../validation/cookbook");

const router = Router();

// router.get("/", getAllRecipes);
router.post("/", vaildate.createRecipe, createRecipe);
// router.put("/:id", updateRecipe);
// router.delete("/:id", deleteRecipe);

module.exports = router;
