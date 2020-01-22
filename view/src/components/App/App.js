import React, { Component } from 'react';
import PropTypes from 'prop-types';

import recipesAPI from '../../services/api';

import Toggler from '../Toggler/Toggler';
import Modal from '../Modal/Modal';
import RecipeEditor from '../RecipeEditor/RecipeEditor';
import RecipesList from '../RecipesList/RecipesList';

export default class App extends Component {
  static propType = {
    recipes: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
    isCreating: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    selectedRecipeId: PropTypes.string.isRequired,
  };

  state = {
    recipes: [],
    isCreating: false,
    isEditing: false,
    selectedRecipeId: null,
  };

  componentDidMount() {
    this.updateRecipes();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.recipes !== this.state.recipes) {
  //     console.log('update');
  //     this.updateRecipes();
  //   }
  // }

  updateRecipes = () => {
    recipesAPI.getAllRecipes().then(recipes => {
      this.setState({ recipes });
    });
  };

  addRecipe = newRecipe => {
    recipesAPI
      .createRecipe(newRecipe)
      .then(() => {
        this.updateRecipes();
        //  if componentDidUpdate -> then(addedRecipe => {
        //   this.setState(state => ({
        //     recipes: [...state.recipes, addedRecipe],
        //   }));
      })
      .finally(this.closeCreateRecipeModal);
  };

  updateRecipe = ({ title, description }) => {
    recipesAPI
      .updateRecipe(this.state.selectedRecipeId, { title, description })
      .then(() => {
        this.updateRecipes();
      })
      .finally(this.closeEditRecipeModal);
  };

  removeRecipe = idRecipe => {
    recipesAPI.deleteRecipe(idRecipe).then(() => {
      this.updateRecipes();
    });
  };

  openCreateRecipeModal = () => {
    this.setState({ isCreating: true });
  };

  closeCreateRecipeModal = () => {
    this.setState({ isCreating: false });
  };

  openEditRecipeModal = id => {
    this.setState({
      isEditing: true,
      selectedRecipeId: id,
    });
  };

  closeEditRecipeModal = () => {
    this.setState({
      isEditing: false,
      selectedRecipeId: null,
    });
  };

  render() {
    const { recipes, isCreating, isEditing, selectedRecipeId } = this.state;
    const recipeInEdit = recipes.find(
      recipe => recipe._id === selectedRecipeId,
    );
    return (
      <>
        <button type="button" onClick={this.openCreateRecipeModal}>
          New recipe
        </button>
        <RecipesList
          recipes={recipes}
          onEditRecipe={this.openEditRecipeModal}
          onRemoveRecipe={this.removeRecipe}
        />
        {isCreating && (
          <Modal onClose={this.closeCreateRecipeModal}>
            <RecipeEditor
              onSave={this.addRecipe}
              onCancel={this.closeCreateRecipeModal}
            />
          </Modal>
        )}
        {isEditing && (
          <Modal onClose={this.closeEditRecipeModal}>
            <RecipeEditor
              onSave={this.updateRecipe}
              onCancel={this.closeEditRecipeModal}
              title={recipeInEdit.title}
              description={recipeInEdit.description}
            />
          </Modal>
        )}
      </>
    );
  }
}
