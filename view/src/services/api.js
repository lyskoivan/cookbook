import axios from 'axios';

axios.defaults.baseURL =
  'https://bs-cookbook.herokuapp.com' || 'http://localhost:8000';

export default {
  async getAllRecipes() {
    try {
      const getRecipes = await axios.get('/api/recipes/');

      return getRecipes.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async createRecipe(data) {
    try {
      const addRecipe = await axios.post('/api/recipes/', {
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
        url: `/api/recipes/${id}`,
      });

      return recipe.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateRecipe(id, updateData) {
    try {
      const updateRecipe = await axios.put(`/api/recipes/${id}`, updateData);

      return updateRecipe.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getOldRecipe(id) {
    try {
      const getRecipe = await axios.get(`/api/old/${id}`);

      return getRecipe.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
