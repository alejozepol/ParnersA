import React from 'react';
import './modal.scss';

const Modal = ({ children, close }) => (
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
      {children}
    </div>
  </section>
);

export default Modal;
