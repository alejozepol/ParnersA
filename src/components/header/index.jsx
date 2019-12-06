import React from 'react';
import Logo from '../../assets/static/Logo.png';
import './Header.scss';

const Header = (dir) => {
  return (
    <section className='Header'>
      <div>
        <p>s</p>
      </div>
      <div>
        <img src={Logo} alt='Logo Parners' />
      </div>
    </section>
  );
};

export default Header;
