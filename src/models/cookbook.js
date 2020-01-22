const mongoose = require("mongoose");
const { Schema } = mongoose;

const oldRecipe = require("./old_recipe");

const cookbookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Cookbook = mongoose.model("Cookbook", cookbookSchema);

module.exports = {
  async getAllRecipes() {
    return await Cookbook.find().sort({ date: "desc" });
  },

  async createRecipe(data) {
    const recipes = new Cookbook(data);
    return await recipes.save();
  },

  async updateRecipe(id, data) {
    return await Cookbook.findByIdAndUpdate(id, data);
  },

  async deleteRecipe(id) {
    await oldRecipe.removeRecipeVersion(id);
    return await Cookbook.findByIdAndDelete(id);
  }
};
