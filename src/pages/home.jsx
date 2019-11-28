import React from 'react';
import ContainerCard from '../components/containercard';
import CardImg from '../components/atomos/cardImg';
import perfil from '../assets/static/perfil.jpg';
import '../assets/styles/layout.scss';

const Home = () => {
  return (
    <section className='Home'>
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
    </section>
  );
};

export default Home;
