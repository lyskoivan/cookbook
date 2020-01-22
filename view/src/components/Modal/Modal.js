import React from 'react';
import css from './Modal.module.css';

const Modal = () => (
  <div className={css.backdrop}>
    <div className={css.modal} />
  </div>
);

export default Modal;
