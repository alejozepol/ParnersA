import React from 'react';
import './Input.scss';

const Input = (props) => {
  const { type, name, onChange, key, value } = props;
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
    case 'standar':
      return (
        <input
          className='Input Input__standar'
          placeholder={name}
          type='text'
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    case 'datetime':
      return (
        <input
          className='Input'
          placeholder={name}
          type='time'
          name={key}
          value={value}
          min={Date.now}
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    case 'date':
      return (
        <input
          className='Input Input__standar'
          placeholder={name}
          type={type}
          name={key}
          value={value}
          min={Date.now}
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    case 'number':
      return (
        <input
          className='Input'
          placeholder={name}
          type='text'
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    default:
      return (
        <input
          className='Input'
          placeholder={name}
          type='text'
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );

  }
};

export default Input;
