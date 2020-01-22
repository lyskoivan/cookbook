const Cookbook = require("../../models/cookbook");
const oldRecipe = require("../../models/old_recipe");

const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    req.body.date = Date.now();

    const recipe = await Cookbook.updateRecipe(id, req.body);

    console.log(req.body);

    oldRecipe.createOldVersionRecipe(id, recipe);

    res.status(200).json(recipe);
  } catch (err) {
    console.error("Database error: ", err.message);

    res.status(500).json({ errors: "Database error" });
  }
};
module.exports = updateRecipe;
