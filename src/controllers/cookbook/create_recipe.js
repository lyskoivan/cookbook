const Cookbook = require("../../models/cookbook");

const createRecipe = async (req, res) => {
  try {
    const recipe = await Cookbook.createRecipe(req.body);

    res.status(201).json(recipe);
  } catch (err) {
    console.error("Database error: ", err.message);
    res.status(500).json({ errors: "Database error" });
  }
};
module.exports = createRecipe;
