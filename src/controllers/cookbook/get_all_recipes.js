const Cookbook = require("../../models/cookbook");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Cookbook.getAllRecipes(req.body);

    res.status(200).json(recipes);
  } catch (err) {
    console.error("Database error: ", err.message);
    res.status(500).json({ errors: "Database error" });
  }
};
module.exports = getAllRecipes;
