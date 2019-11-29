import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContainerCard from '../components/containercard';
import CardImg from '../components/atomos/cardImg';
import perfil from '../assets/static/perfil.jpg';
import '../assets/styles/layout.scss';

const Home = (props) => {

  const { personas } = props;

  return (
    <section className='Home'>
      <ContainerCard title='Personas'>
        {personas.map((p) => (
          <Link to={`persona/${p.id}`}>
            <CardImg
              key={p.id}
              name={p.name}
              img={p.urlImg}
              distancia={p.distancia}
              deporte='futbol'
            />
          </Link>
        ))}
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

const mapStateToProps = (state) => {
  return {
    personas: state.personas,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
