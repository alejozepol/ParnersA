import React from 'react';
import Buscador from '../components/buscador';
import '../assets/styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <section className='Layout'>
      <div className='Layout__header'>
        <Buscador isHome />
        <i className='material-icons'>
          notifications
        </i>
      </div>
      <div className='Layout__contenido'>
        {children}
      </div>
      <div className='Layout__footer'>
        <i className='material-icons'>
          person_pin
        </i>
        <i className='material-icons'>
          local_play
        </i>
        <i className='material-icons'>
          add
        </i>
        <i className='material-icons'>
          directions
        </i>
        <i className='material-icons'>
          sentiment_very_satisfied
        </i>
      </div>
    </section>
  );
};

export default Layout;
