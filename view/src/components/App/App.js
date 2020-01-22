import React, { Component } from 'react';

import recipesAPI from '../../services/api';

import Toggler from '../Toggler/Toggler';
import Modal from '../Modal/Modal';

export default class App extends Component {
  state = {
    recipes: [],
  };

  render() {
    return (
      <>
        <Toggler>
          {({ isOpen, onToggle }) => (
            <>
              <button type="button" onClick={onToggle}>
                New Recipe
              </button>
              {isOpen && <Modal />}
            </>
          )}
        </Toggler>
      </>
    );
  }
}
