import React from 'react';
import PropTypes from 'prop-types';

import RecipesListItem from '../RecipesListItem/RecipesListItem';

const RecipesList = ({ recipes, onRemoveRecipe, onEditRecipe }) =>
  recipes.length > 0 && (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe._id}>
          <RecipesListItem
            title={recipe.title}
            description={recipe.description}
            onRemoveRecipe={() => onRemoveRecipe(recipe._id)}
            onEditRecipe={() => onEditRecipe(recipe._id)}
          />
        </li>
      ))}
    </ul>
  );

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  onEditRecipe: PropTypes.func.isRequired,
  onRemoveRecipe: PropTypes.func.isRequired,
};

export default RecipesList;
