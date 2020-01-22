import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notyf } from 'notyf';

import styles from './RecipeEditor.module.css';

const notyf = new Notyf();

class RecipeEditor extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: '',
    description: '',
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
    if (!this.state.title || !this.state.description) {
      notyf.error('Заполните поля редактора');
      return;
    }
    this.props.onSave({ ...this.state });
    notyf.success('Заметка успешно добавлена 🎉');

    this.setState({
      title: '',
      description: '',
    });
    this.props.onCancel();
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
        <div className={styles.modal_buttons}>
          <button className={`${styles.button} button`} type="submit">
            Save
          </button>
          <button
            className={`${styles.button} button`}
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default RecipeEditor;
