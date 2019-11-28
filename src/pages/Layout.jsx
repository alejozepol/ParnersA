import React from 'react';
import Buscador from '../components/buscador';
import '../assets/styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <section className='Home'>
      <div className='Home__header'>
        <Buscador />
        <i className='material-icons'>
          notifications
        </i>
      </div>
      <div className='Home__contenido'>
        {children}
      </div>
      <div className='Home__footer'>
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
