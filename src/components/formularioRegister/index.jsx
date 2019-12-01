import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../atomos/Input';
import Button from '../atomos/button';
import firebase from '../../services/firebaseConfig';

import './formularioRegister.scss';

const formularioRegister = (props) => { 
  const [form, setForm] = useState({
    EMAIL: '',
    PASSWORD: '',
  });

  const createUserWithEmailAndPassword = (EMAIL, PASSWORD) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(EMAIL, PASSWORD)
      .then((res) => {
        res.user.sendEmailVerification('https://app.parners.co');
      })
      .catch((error) => console.log(error));
  };

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handlSubmit = (event) => {
    event.preventDefault();
/*     createUserWithEmailAndPassword(form.EMAIL, form.PASSWORD); */
    props.history.push('/');
  };
  return (
    <section className='formularioRegister'>
      <div>
        <h2>Registrate</h2>
      </div>
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

export default connect(null, null)(formularioRegister);
