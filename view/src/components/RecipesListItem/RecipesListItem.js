import React from 'react';
import PropTypes from 'prop-types';

import Toggler from '../Toggler/Toggler';
import OldRecipe from '../OldRecipe/OldRecipe';

import style from './RecipesListItem.module.css';

const RecipesListItem = ({
  title,
  description,
  id,
  onRemoveRecipe,
  onEditRecipe,
  date,
}) => {
  return (
    <>
      <div className={style.recipe_info}>
        <p className={style.date}>{date}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={style.recipe_item__footer}>
        <div className={style.recipe_controls}>
          <button
            className={`${style.recipe_controls__button} button`}
            type="button"
            onClick={onEditRecipe}
          >
            Edit
          </button>
          <button className="button" type="button" onClick={onRemoveRecipe}>
            Delete
          </button>
        </div>
        <Toggler>
          {({ isOpen, onToggle }) => (
            <div className={style.recipe_show_version}>
              <button
                className={`${style.show__button} button`}
                type="button"
                onClick={onToggle}
              >
                {isOpen ? 'Hide' : 'Show'}
              </button>
              {isOpen && <OldRecipe recipeId={id} />}
            </div>
          )}
        </Toggler>
      </div>
    </>
  );
};

RecipesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onRemoveRecipe: PropTypes.func.isRequired,
  onEditRecipe: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default RecipesListItem;
