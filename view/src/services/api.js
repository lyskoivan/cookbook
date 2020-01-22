import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/recipes';

export default {
  async getAllRecipes() {
    try {
      const getRecipes = await axios.get('/');

      return getRecipes.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createRecipe(data) {
    try {
      const addRecipe = await axios.post('/', {
        title: data.title,
        description: data.description,
      });

      return addRecipe.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async deleteRecipe(id) {
    try {
      const recipe = await axios({
        method: 'delete',
        url: `/${id}`,
      });

      return recipe.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateRecipe(id, updateData) {
    try {
      const updateRecipe = await axios.put(`/${id}`, updateData);

      return updateRecipe.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
