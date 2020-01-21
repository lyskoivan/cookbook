const mongoose = require("mongoose");
const { Schema } = mongoose;
const oldRecipe = new Schema({
  refId: Schema.Types.ObjectId,
  oldVersion: []
});

const OldRecipe = mongoose.model("oldrecipes", oldRecipe);

module.exports = {
  async createOldVersionRecipe(id, data) {
    const toSave = { refId: id, oldVersion: [data] };

    const find = await OldRecipe.findOne({ refId: id });

    if (!find) {
      const recipeVersion = new OldRecipe(toSave);
      return await recipeVersion.save();
    }
    find.oldVersion.push(data);
    return await find.save();
  },

  async removeRecipeVersion(id) {
    return await OldRecipe.findOneAndDelete({ refId: id });
  },

  async getOldRecipe(id) {
    return await OldRecipe.findOne({ refId: id });
    // return await Cookbook.find().populate("oldrecipes");
  }
};
