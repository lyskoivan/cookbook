import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import recipesAPI from '../../services/api';

import styles from './OldRecipe.module.css';

class OldRecipe extends Component {
  static propType = {
    oldRecipes: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
    recipeId: PropTypes.string.isRequired,
  };

  state = {
    oldRecipe: [],
  };

  componentDidMount() {
    const { recipeId } = this.props;
    this.showOldVersions(recipeId);
  }

  showOldVersions = id => {
    recipesAPI.getOldRecipe(id).then(oldRecipe => {
      if (oldRecipe) {
        this.setState({ oldRecipe: oldRecipe.oldVersion });
      }
    });
  };

  render() {
    const { oldRecipe } = this.state;
    const showItem = oldRecipe.map(recipe => {
      const parseDate = new Date(recipe.date);
      const date = parseDate.toLocaleString('en-US');
      return (
        <li key={shortid.generate()} className={styles.version_list__item}>
          <p className={styles.date}>{date}</p>
          <h3 className={styles.title}>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </li>
      );
    });

    return (
      oldRecipe.length > 0 && (
        <ul className={styles.version_list}>{showItem}</ul>
      )
    );
  }
}

export default OldRecipe;
