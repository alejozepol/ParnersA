import React from 'react';
import './modal.scss';

const Modal = ({ close, title, message }) => (
  <section className='Modal'>
    <div className='Modal__content'>
      <i
        className='material-icons'
        onClick={close}
        role='button'
        tabIndex='0'
        type='buton'
      >
        close
      </i>
      <div className='Modal__content__title'>
        <h3>{title}</h3>
      </div>
      <div className='Modal__content__messager'>
        <p>{message}</p>
      </div>

    </div>
  </section>
);

export default Modal;
