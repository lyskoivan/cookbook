import React, { Component } from 'react';
import PropTypes from 'prop-types';

import recipesAPI from '../../services/api';

import Toggler from '../Toggler/Toggler';
import Modal from '../Modal/Modal';
import RecipeEditor from '../RecipeEditor/RecipeEditor';

export default class App extends Component {
  static propType = {
    recipes: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
    isCreating: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
  };

  state = {
    recipes: [],
    isCreating: false,
    isEditing: false,
  };

  openCreateRecipeModal = () => {
    this.setState({ isCreating: true });
  };

  closeCreateRecipeModal = () => {
    this.setState({ isCreating: false });
  };

  render() {
    const { recipes, isCreating, isEditing } = this.state;
    return (
      <>
        <button type="button" onClick={this.openCreateRecipeModal}>
          Add task
        </button>
        {isCreating && (
          <Modal onClose={this.closeCreateRecipeModal}>
            <RecipeEditor onCancel={this.closeCreateRecipeModal} />
          </Modal>
        )}
      </>
    );
  }
}
