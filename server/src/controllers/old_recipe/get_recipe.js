const OldRecipe = require("../../models/old_recipe");

const get_recipe = async (req, res) => {
  try {
    const recipes = await OldRecipe.getOldRecipe(req.params.id);

    res.status(200).json(recipes);
  } catch (err) {
    console.error("Database error: ", err.message);
    res.status(500).json({ errors: "Database error" });
  }
};
module.exports = get_recipe;
