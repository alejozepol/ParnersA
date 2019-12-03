import React, { useState } from 'react';
import { connect } from 'react-redux';
import firebase from '../services/firebaseConfig';
import { loginRequest } from '../action';
import { createUsuarBD } from '../services/databs';
import Input from '../components/atomos/Input';
import Button from '../components/atomos/button';
import Modal from '../components/atomos/modal';

const Login = (props) => {
  const [form, setForm] = useState({
    EMAIL: '',
    PASSWORD: '',
  });
  const [modal, setModal] = useState({
    title: '',
    messager: '',
    view: false,
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

  function loginEmailPassword(form) {
    firebase.auth()
      .signInWithEmailAndPassword(form.EMAIL, form.PASSWORD)
      .then((res) => {
        form.uid = res.user.uid;
        props.loginRequest(form);
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

  }

  function loginGoogle() {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        form.photoURL = res.user.photoURL;
        form.name = res.user.displayName;
        form.id = res.user.uid;
        form.EMAIL = res.user.email;
        createUsuarBD(form);
        props.loginRequest(form);
        props.history.push('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handlSubmit = (event) => {
    event.preventDefault();
    loginEmailPassword(form);
    props.history.push('/home');
  };
  return (
    <section className='formularioRegister'>
      {modal.view &&
        <Modal close={() => viewModal()} title={modal.title} message={modal.messager} />}
      <h2>Ingresa</h2>
      <form onSubmit={handlSubmit}>
        <Input type='email' name='email' onChange={handleInput} />
        <Input type='password' name='password' onChange={handleInput} />
        <Button type='submit'>
          Enviar
        </Button>
      </form>
      <div className='formularioRegister__Botones'>
        <Button type='img' onClick={() => loginGoogle()}>
          <img src='https://www.freepnglogos.com/uploads/google-plus-png-logo/download-google-brand-vector-png-logos-18.png' alt='LogoWhatsapp' />
          Google
        </Button>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
