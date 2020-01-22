import React, { Component } from 'react';

import recipesAPI from '../../services/api';

import Modal from '../Modal/Modal';
import RecipeEditor from '../RecipeEditor/RecipeEditor';
import RecipesList from '../RecipesList/RecipesList';

import style from './App.module.css';

export default class App extends Component {
  state = {
    recipes: [],
    isCreating: false,
    isEditing: false,
    selectedRecipeId: null,
  };

  componentDidMount() {
    this.updateRecipes();
  }

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
      })
      .finally(this.closeCreateRecipeModal);
  };

  editRecipe = ({ title, description }) => {
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
        <button
          type="button"
          onClick={this.openCreateRecipeModal}
          className={`${style.button} button`}
        >
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
              onSave={this.editRecipe}
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
