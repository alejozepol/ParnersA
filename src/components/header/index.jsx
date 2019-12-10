import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../icons';
import Logo from '../../assets/static/Logo.png';
import IsoTipo from '../../assets/static/isoTipo.png';
import './Header.scss';

const Header = ({ dir, title }) => {
  return (
    <section className='Header'>
      <div className='Header__atras'>
        {dir !== '/' && (
          <Link to='/' className='Footer__perfil'>
            <Icons type='atras' />
          </Link>
        )}
      </div>
      <div className='Header__logo'>
        {dir === '/' && <img src={Logo} alt='Logo Parners' />}
        {dir !== '/' && <h2>{String(dir).slice(1).toLocaleUpperCase()}</h2>}
      </div>
      <div className='Header__isotipo'>
        {dir !== '/' && <img src={IsoTipo} alt='Logo Parners' />}
      </div>
    </section>
  );
};

export default Header;
