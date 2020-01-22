import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.shape().isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
    window.addEventListener('mousedown', this.handleBackdropClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('mousedown', this.handleBackdropClick);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;
    return (
      <div className={css.backdrop} ref={this.backdropRef}>
        <div className={css.modal}>{children}</div>
      </div>
    );
  }
}
