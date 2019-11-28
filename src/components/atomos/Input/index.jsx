import React from 'react';
import './Input.scss';

const Input = (props) => {
  const { type, name, onChange } = props;
  switch (type) {
    case 'email':
      return (
        <input
          className='Input__email Input'
          placeholder='Correo electronico'
          type='email'
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    case 'password':
      return (
        <input
          className='Input__password Input'
          placeholder='Contraseña'
          type='password'
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    default:
      return (
        <input
          className='Input__email Input'
          placeholder={name}
          type='email'
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );

  }
};

export default Input;
