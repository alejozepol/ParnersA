import React from 'react';
import Icons from '../icons';
import Logo from '../../assets/static/Logo.png';
import IsoTipo from '../../assets/static/isoTipo.png';
import './Header.scss';

const Header = ({ dir, title }) => {
  return (
    <section className='Header'>
      <div className='Header__atras'>
        {dir !== '/' && <Icons type='atras' />}
      </div>
      <div className='Header__logo'>
        {dir === '/' && <img src={Logo} alt='Logo Parners' />}
      </div>
      <div className='Header__title'>
        {dir !== '/' && <h2>{String(dir).slice(1).toLocaleUpperCase()}</h2>}
      </div>
      <div className='Header__isotipo'>
        {dir !== '/' && <img src={IsoTipo} alt='Logo Parners' />}
      </div>
    </section>
  );
};

export default Header;
