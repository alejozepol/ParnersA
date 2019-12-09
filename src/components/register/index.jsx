import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FirebaseApp } from '../../services/firebase/index';
import Input from '../Input';
import Button from '../button';
import Modal from '../modal';
import './Register.scss';

const Register = (props) => {
  const [modal, setModal] = useState({
    title: '',
    messager: '',
    view: false,
  });
  const [form, setForm] = useState({
    EMAIL: '',
    PASSWORD: '',
  });
  function createUsuarBD(info) {
    FirebaseApp.firestore()
      .collection('user')
      .doc(info.EMAIL)
      .set(info)
      .then()
      .catch((error) => error);
  }
  const viewModal = () => {
    modal.view ? setModal({
      ...modal,
      view: false,
    }) : setModal({
      ...modal,
      view: true,
    });
  };
  const createUserWithEmailAndPassword = (user) => {
    FirebaseApp
      .auth()
      .createUserWithEmailAndPassword(user.EMAIL, user.PASSWORD)
      .then((res) => {
        delete form.PASSWORD;
        form.uid = res.user.uid;
        res.user.sendEmailVerification({
          url: 'https://parners.co',
        });
        setModal({
          title: 'Bienvenido',
          messager: `registro exitoso por favor revise su correo ${form.EMAIL} para terminar el registro`,
          view: true,
        });
        createUsuarBD(form);
        props.history.push('/');
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

  function loginGoogle() {
    FirebaseApp
      .auth()
      .signInWithPopup(new FirebaseApp.auth.GoogleAuthProvider())
      .then((res) => {
        form.photoURL = res.user.photoURL;
        form.name = res.user.displayName;
        form.id = res.user.uid;
        form.EMAIL = res.user.email;
        createUsuarBD(form);
        props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handlSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(form);
  };
  return (
    <section className='Register'>
      {modal.view &&
        <Modal close={() => viewModal()} title={modal.title} message={modal.messager} />}
      <div>
        <h2>Registrate</h2>
      </div>
      <form onSubmit={handlSubmit}>
        <Input type='oscuro' name='name' placeholder='Nombres' onChange={handleInput} />
        <Input type='email' name='email' onChange={handleInput} />
        <Input type='password' name='password' onChange={handleInput} />
        <Button type='submit'>
          Enviar
        </Button>
      </form>
      <div className='Register__Botones'>
        <Button type='img' onClick={() => loginGoogle()}>
          <img src='https://www.freepnglogos.com/uploads/google-plus-png-logo/download-google-brand-vector-png-logos-18.png' alt='LogoWhatsapp' />
          Google
        </Button>
      </div>
    </section>
  );
};

export default connect(null, null)(Register);
