import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './RecipeEditor.module.css';

class RecipeEditor extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  state = {
    title: this.props.title,
    description: this.props.description,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      title: '',
      description: '',
    });
  };

  render() {
    const { title, description } = this.state;
    const { onCancel } = this.props;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          placeholder="Enter title..."
        />
        <input
          className={styles.input}
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
          placeholder="Enter description..."
        />
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default RecipeEditor;
