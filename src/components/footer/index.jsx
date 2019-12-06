import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import btnMas from '../../assets/static/btn_mas.png';
import Icons from '../icons';

const Footer = ({ dir }) => {
  return (
    dir !== '/eventos' && (
      <section className='Footer'>
        <Link to='/' className='Footer__eventos'>
          <Icons type='eventos' dir={dir} />
        </Link>
        <Link to='/personas' className='Footer__personas'>
          <Icons type='personas' dir={dir} />
        </Link>
        <Link to='/eventos' className='Footer__btn'>
          {dir !== '/eventos' ?
            (
              <button type='button' className='button'>+</button>
            ) : (
              <button type='button' className='button-aceptar'>
                ✔
              </button>
            )}
          {/* <img src={btnMas} alt='accion' /> */}
        </Link>
        <Link to='/lugares' className='Footer__lugares'>
          <Icons type='lugares' dir={dir} />
        </Link>
        <Link to='/perfil' className='Footer__perfil'>
          <Icons type='perfil' dir={dir} />
        </Link>
      </section>
    )
  );
};

export default Footer;
