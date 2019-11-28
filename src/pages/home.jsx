import React from 'react';
import Buscador from '../components/buscador';
import '../assets/styles/home.scss';

const Home = () => {
  return (
    <section className='Home'>
      <div className='Home__header'>
        <Buscador />
        <i className='material-icons'>
          notifications
        </i>
      </div>

    </section>
  );
};

export default Home;
