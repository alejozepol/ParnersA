import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Icons from '../icons';

const Footer = ({ dir }) => {

  return (
    <section className='Footer'>
      <Link to='/' className='Footer__eventos'>
        <Icons type='eventos' dir={dir} />
      </Link>
      <Link to='/personas' className='Footer__personas'>
        <Icons type='personas' dir={dir} />
      </Link>
      <div className='Footer__btn'>
        boton grande
      </div>
      <Link to='/lugares' className='Footer__lugares'>
        <Icons type='lugares' dir={dir} />

      </Link>
      <Link to='/perfil' className='Footer__perfil'>
        <Icons type='perfil' dir={dir} />
      </Link>
    </section>
  );
};

export default Footer;
