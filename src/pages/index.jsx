import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Contenido from '../components/Contenido';
import Logo from '../assets/static/logo.png';
import '../assets/styles/index.scss';

const Pages = () => {
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

  return (
    <Contenido>
      <section className='Pages'>
        <img className='Pages__img' src={Logo} alt='Logo Parners' />
        <div className='Pages__text'>
          <h2 className='Pages__title'>{text.title}</h2>
          <h3 className='Pages__frase'>{text.frase}</h3>
        </div>
        <h4 className='Pages__cta'>¡Hacer deporte no volverá a ser igual!</h4>
        <div className='Pages__btn'>
          <Link
            to='/registro'
            className='Button'
            type='button'
          >
            Empieza ya
          </Link>
          <Link
            to='/login'
            className='Button Button__primario'
            type='button'
          >
            Log in
          </Link>
        </div>
      </section>
    </Contenido>
  );
};

export default connect(null, null)(Pages);
