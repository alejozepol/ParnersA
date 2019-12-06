import React from 'react';
import './Footer.scss';
import Icons from '../icons';

const Footer = () => {
  return (
    <section className='Footer'>
      <div className='Footer__eventos'>
        <Icons type='eventos' />
      </div>
      <div className='Footer__personas'>
        <Icons type='personas' />
      </div>
      <div className='Footer__btn'>
boton grande
      </div>
      <div className='Footer__lugares'>
        <Icons type='lugares' />

      </div>
      <div className='Footer__perfil'>
        <Icons type='perfil' />
      </div>
    </section>
  );
};

export default Footer;
