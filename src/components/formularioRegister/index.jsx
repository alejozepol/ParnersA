import React, { useState } from 'react';
import Input from '../atomos/Input';
import './formularioRegister.scss';
import Button from '../atomos/button';

const formularioRegister = () => {
  const [form, setForm] = useState({
    EMAIL: '',
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const handlSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className='formularioRegister'>
      <h2>Registrate</h2>
      <form onSubmit={handlSubmit}>
        <Input type='email' name='email' onChange={handleInput} />
        <Input type='password' name='password' onChange={handleInput} />
        <Button type='submit'>
          Enviar
        </Button>
      </form>
      <div className='formularioRegister__Botones'>
        <Button type='button'>
          Google
        </Button>
        <Button type='button'>
          Ya tengo cuenta
        </Button>
      </div>
    </section>
  );
};

export default formularioRegister;