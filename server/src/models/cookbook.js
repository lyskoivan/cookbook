const mongoose = require("mongoose");
const { Schema } = mongoose;

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
  /**
   * Added recipe to Cookbook collection.
   *
   * @param {{title: String, description: String}} data Waiting title and description
   */
  async createRecipe(data) {
    const recipes = new Cookbook(data);
    return await recipes.save();
  }
};
