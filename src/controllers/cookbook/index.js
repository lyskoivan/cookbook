const RecipesControllers = {
  getAllRecipes: require("./get_all_recipes"),
  createRecipe: require("./create_recipe"),
  updateRecipe: require("./update_recipe"),
  deleteRecipe: require("./delete_recipe")
};

module.exports = RecipesControllers;
