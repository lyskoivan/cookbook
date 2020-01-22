import React from 'react';
import PropTypes from 'prop-types';

import styles from './OldRecipeItem.module.css';

const OldRecipeItem = ({ date, title, description }) => {
  return (
    <>
      <p className={styles.date}>{date}</p>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </>
  );
};

OldRecipeItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default OldRecipeItem;
