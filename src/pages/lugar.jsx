/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLugar } from '../action';
import FotoPerfil from '../components/atomos/fotoPerfil';
import Button from '../components/atomos/button';
import '../assets/styles/persona.scss';

const Persona = (props) => {
  const { lugar, getLugar } = props;
  const { id } = props.match.params;

  useEffect(() => {
    getLugar(id);
  }, []);

  return (
    <section className='Persona'>
      <div>
        <FotoPerfil img={lugar.urlImg} alt={lugar.name} />
        <p>En Linea</p>
      </div>
      <div>
        <h4>{lugar.name}</h4>
        <h4>Genero: M</h4>
        <h4>{`Distancia: ${lugar.distancia}`}</h4>
        <h4>Gustos Deportivos</h4>
        <p>Futboll</p>
      </div>
      <div>
        <Button>
          Contactar
        </Button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    lugar: state.lugar,
  };

};

const mapDispatchToProps = {
  getLugar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Persona);
