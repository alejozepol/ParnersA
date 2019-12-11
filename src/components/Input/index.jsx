import React from 'react';
import './Input.scss';

const Input = (props) => {
  const { type, name, onChange, value, placeholder } = props;
  switch (type) {
    case 'email':
      return (
        <input
          className='Input__oscuro Input'
          placeholder='Correo electronico'
          type='email'
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    case 'oscuro':
      return (
        <input
          className='Input__oscuro Input'
          placeholder={placeholder}
          type='text'
          name={name}
          onChange={onChange}
          required
        />
      );
    case 'password':
      return (
        <input
          className='Input__oscuro Input'
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
          placeholder={placeholder}
          type='text'
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    case 'time':
      return (
        <input
          className='Input'
          placeholder={placeholder}
          type='time'
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    case 'date':
      return (
        <input
          className='Input'
          placeholder={placeholder}
          type={type}
          name={name.toUpperCase()}
          onChange={onChange}
          min={new Date().getDate()}
          required
        />
      );
    case 'datetime':
      return (
        <input
          className='Input'
          placeholder={placeholder}
          type={type}
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    case 'number':
      return (
        <input
          className='Input'
          placeholder={placeholder}
          type={type}
          name={name.toUpperCase()}
          onChange={onChange}
          required
        />
      );
    case 'numberN':
      return (
        <input
          className='Input'
          placeholder={placeholder}
          type={type}
          name={name.toUpperCase()}
          onChange={onChange}
        />
      );
    case 'text':
      return (
        <input
          className='Input'
          placeholder={placeholder}
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
          placeholder={placeholder}
          type='text'
          name={name.toUpperCase()}
          onChange={onChange}
        />
      );

  }
};

export default Input;
