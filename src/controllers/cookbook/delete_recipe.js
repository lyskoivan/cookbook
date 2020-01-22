const Cookbook = require("../../models/cookbook");

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Cookbook.deleteRecipe(req.params.id);

    res.status(200).json(recipe);
  } catch (err) {
    console.error("Database error: ", err.message);
    res.status(500).json({ errors: "Database error" });
  }
};
module.exports = deleteRecipe;
