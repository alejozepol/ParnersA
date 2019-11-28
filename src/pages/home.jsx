import React from 'react';
import Buscador from '../components/buscador';
import ContainerCard from '../components/containercard';
import CardImg from '../components/atomos/cardImg';
import perfil from '../assets/static/perfil.jpg';
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
      <div className='Home__contenido'>
        <ContainerCard title='Personas'>
          <CardImg
            name='Hugo'
            img={perfil}
            distancia='1mtr'
            deporte='futbol'
          />
          <CardImg
            name='Hugo'
            img={perfil}
            distancia='1mtr'
            deporte='futbol'
          />
          <CardImg
            name='Hugo'
            img={perfil}
            distancia='1mtr'
            deporte='futbol'
          />
          <CardImg
            name='Hugo'
            img={perfil}
            distancia='1mtr'
            deporte='futbol'
          />
          <CardImg
            name='Hugo'
            img={perfil}
            distancia='1mtr'
            deporte='futbol'
          />
          <CardImg
            name='Hugo'
            img={perfil}
            distancia='1mtr'
            deporte='futbol'
          />
        </ContainerCard>
        <ContainerCard title='Eventos'>
          <CardImg
            name='Hugo'
            img={perfil}
            distancia='1mtr'
            deporte='futbol'
          />
        </ContainerCard>
        <ContainerCard title='Lugares'>
          <CardImg
            name='Hugo'
            img={perfil}
            distancia='1mtr'
            deporte='futbol'
          />
        </ContainerCard>
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

export default Home;
