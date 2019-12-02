import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { type, children, } = props;
  switch (type) {
    case 'submit':
      return (
        <button
          className='Button Button__primario'
          type='submit'
        >
          {children}
        </button>
      );
    case 'button':
      return (
        <button
          className='Button Button__primario'
          type='button'
        >
          {children}
        </button>
      );
    case 'img':
      return (
        <button
          className='Button Button-img'
          type='button'
        >
        
          {children}
        </button>
      );
    default:
      return (
        <button
          className='Button'
          type='button'
        >
          {children}
        </button>
      );
  }
};

export default Button;
