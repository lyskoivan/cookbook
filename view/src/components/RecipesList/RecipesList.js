import React from 'react';
import PropTypes from 'prop-types';

import RecipesListItem from '../RecipesListItem/RecipesListItem';

import style from './RecipesList.module.css';

const RecipesList = ({ recipes, onRemoveRecipe, onEditRecipe }) => {
  const showItems = recipes.map(recipe => {
    const parseDate = new Date(recipe.date);
    const date = parseDate.toLocaleString('en-US');
    return (
      <li key={recipe._id} className={style.recipes_list__item}>
        <RecipesListItem
          title={recipe.title}
          description={recipe.description}
          id={recipe._id}
          date={date}
          onRemoveRecipe={() => onRemoveRecipe(recipe._id)}
          onEditRecipe={() => onEditRecipe(recipe._id)}
        />
      </li>
    );
  });

  return (
    recipes.length > 0 && <ul className={style.recipes_list}>{showItems}</ul>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  onEditRecipe: PropTypes.func.isRequired,
  onRemoveRecipe: PropTypes.func.isRequired,
};

export default RecipesList;
