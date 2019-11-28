import React from 'react';
import LogoOscuro from '../../assets/static/LogoOscuro.png';
import './confirmacion.scss';

const Confirmacion = () => {
  return (
    <section className='confirmacion'>
      <img className='confirmacion__img' src={LogoOscuro} alt='Logo Parners' />
      <div className='confirmacion__text'>
        <h2>¡Gracias!</h2>
        <hr />
        <h3>
          Este es el primer paso para vivir tu deporte como nunca antes
        </h3>
      </div>
    </section>
  );
};

export default Confirmacion;
