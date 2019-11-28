import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { type, children, } = props;
  switch (type) {
    case 'Primario':
      return (
        <button
          className='Button Button__primario'
          type='button'
        >
          {children}
        </button>
      );
    case 'Segundario':
      return (<input className='Input__password Input' placeholder='Contraseña' type='password' name={String.prototype.toUpperCase(name)} required />);
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
