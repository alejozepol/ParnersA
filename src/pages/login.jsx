import React, { useState } from 'react';
import { connect } from 'react-redux';
import firebase from '../services/firebaseConfig';
import Input from '../components/atomos/Input';
import Button from '../components/atomos/button';

const Login = () => {
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
      <h2>Ingresa</h2>
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
      </div>
    </section>
  );
};

export default Login;
