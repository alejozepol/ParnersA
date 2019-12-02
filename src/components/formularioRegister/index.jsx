import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../../services/firebaseConfig';
import Input from '../atomos/Input';
import Modal from '../atomos/modal';
import Button from '../atomos/button';

import './formularioRegister.scss';

const formularioRegister = (props) => {
  const [modal, setModal] = useState({
    title: '',
    messager: '',
    view: false,
  });

  const [form, setForm] = useState({
    EMAIL: '',
    PASSWORD: '',
  });

  const viewModal = () => {
    modal.view ? setModal({
      ...modal,
      view: false,
    }) : setModal({
      ...modal,
      view: true,
    });
  };
  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const createUserWithEmailAndPassword = (user) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.EMAIL, user.PASSWORD)
      .then((res) => {
        res.user.sendEmailVerification('https://app.parners.co');
      })
      .catch((error) => {
        viewModal();
        switch (error.code) {
          case 'auth/email-already-in-use':
            setModal({
              title: '😰¡Email ya registrado!😰',
              messager: `El correo ${form.EMAIL} ya se encuentra registrado inicia sesion o registrate con otro correo`,
              view: true,
            });
            setMessages('😰¡Email ya registrado!😰');
            break;
          default:
            setModal({
              title: '😰Ha ocurrido un error😰',
              messager: `${error}`,
              view: true,
            });
            break;
        }
      });
  };

  const handlSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(form);
  };
  return (
    <section className='formularioRegister'>
      {modal.view &&
        <Modal close={() => viewModal()} title={modal.title} message={modal.messager} />}
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
        <Button type='img'>
          <img src='https://www.freepnglogos.com/uploads/google-plus-png-logo/download-google-brand-vector-png-logos-18.png' alt='LogoWhatsapp' />
          Google
        </Button>
        <Button type='button'>
          <Link to='/login'>
              Ya tengo cuenta
          </Link>
        </Button>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return state;
};
const mapActionToProps = {

};

export default connect(mapStateToProps, mapActionToProps)(formularioRegister);
