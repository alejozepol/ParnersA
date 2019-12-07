import React from 'react';
import { connect } from 'react-redux';
import './modal.scss';

const Modal = ({ close, title, message, img, children }) => (
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
        {img && <img src={img} alt={title} />}
        <h3>{title}</h3>
      </div>
      <div className='Modal__content__messager'>
        {message ? <p>{message}</p> : children}
      </div>
    </div>
  </section>
);

export default connect(null, null)(Modal);
