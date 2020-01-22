import React from 'react';
import PropTypes from 'prop-types';

const RecipesListItem = ({
  title,
  description,
  onRemoveRecipe,
  onEditRecipe,
}) => (
  <>
    <span>
      {title} {description}
    </span>
    <button type="button" onClick={onEditRecipe}>
      Edit
    </button>
    <button type="button" onClick={onRemoveRecipe}>
      Delete
    </button>
  </>
);

RecipesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onRemoveRecipe: PropTypes.func.isRequired,
  onEditRecipe: PropTypes.func.isRequired,
};

export default RecipesListItem;
