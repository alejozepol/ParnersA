/* eslint-disable react/destructuring-assignment */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Contenido from '../components/Contenido';
import Button from '../components/button';
import Modal from '../components/modal';
import Register from '../components/register';
import Logo from '../assets/static/Logo2.png';
import Login from '../components/login';
import '../assets/styles/auth.scss';

const Auth = (props) => {
  const contenido = {
    title: ['Descubre', 'Conéctate', 'Practica'],
    frase: ['espacios, eventos y actividades', 'con personas, equipos y grupos', 'tu deporte favorito'],
  };

  const [text, setText] = useState({
    title: [contenido.title[0]],
    frase: [contenido.frase[0]],
  });

  if (text.title == contenido.title[0]) {
    setTimeout(() => {
      setText({
        ...text,
        title: [contenido.title[1]],
        frase: [contenido.frase[1]],
      });
    }, 3000);
  };

  if (text.title == contenido.title[1]) {
    setTimeout(() => {
      setText({
        ...text,
        title: [contenido.title[2]],
        frase: [contenido.frase[2]],
      });
    }, 3000);
  };

  if (text.title == contenido.title[2]) {
    setTimeout(() => {
      setText({
        ...text,
        title: [contenido.title[0]],
        frase: [contenido.frase[0]],
      });
    }, 3000);
  }
  const [modalRegister, setModalRegister] = useState({
    title: '',
    messager: '',
    view: false,
  });
  const viewModalRegister = () => {
    modalRegister.view ? setModalRegister({
      ...modalRegister,
      view: false,
    }) : setModalRegister({
      ...modalRegister,
      view: true,
    });
  };
  const [modalLogIn, setModalLogIn] = useState({
    title: '',
    messager: '',
    view: false,
  });
  const viewModalLogIn = () => {
    modalLogIn.view ? setModalLogIn({
      ...modalLogIn,
      view: false,
    }) : setModalLogIn({
      ...modalLogIn,
      view: true,
    });
  };
  return (
    <Contenido>
      <section className='Auth'>
        {modalRegister.view && (
          <Modal
            img={Logo}
            title='Entrenemos Juntos'
            close={() => viewModalRegister()}
          >
            <Register history={props.history} />
          </Modal>
        )}
        {modalLogIn.view && (
          <Modal
            img={Logo}
            title='Entrenemos Juntos'
            close={() => viewModalLogIn()}
          >
            <Login history={props.history}/>
          </Modal>
        )}
        <img className='Auth__img' src={Logo} alt='Logo Parners' />
        <div className='Auth__text'>
          <h2 className='Auth__title'>{text.title}</h2>
          <h3 className='Auth__frase'>{text.frase}</h3>
        </div>
        <div className='Auth__btn'>
          <Button
            type='button'
            onClick={() => viewModalRegister()}
          >
            Empieza ya
          </Button>
          <Button
            type='button-claro'
            onClick={() => viewModalLogIn()}
          >
            Log in
          </Button>
        </div>
      </section>
    </Contenido>
  );
};

export default connect(null, null)(Auth);
