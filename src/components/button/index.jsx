import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { type, children, onClick } = props;
  switch (type) {
    case 'submit':
      return (
        <button
          className='Button Button__primario'
          type='submit'
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'button':
      return (
        <button
          className='Button Button__primario'
          type='button'
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'button-claro':
      return (
        <button
          className='Button Button__claro'
          type='button'
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'img':
      return (
        <button
          className='Button Button-img'
          type='button'
          onClick={onClick}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className='Button'
          type='button'
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
