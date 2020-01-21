const Cookbook = require("../../models/cookbook");

const updateRecipe = async (req, res) => {
  try {
    req.body.date = Date.now();
    const recipe = await Cookbook.updateRecipe(req.params.id, req.body);

    res.status(200).json(recipe);
  } catch (err) {
    console.error("Database error: ", err.message);
    res.status(500).json({ errors: "Database error" });
  }
};
module.exports = updateRecipe;
