/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPersona } from '../action';
import FotoPerfil from '../components/atomos/fotoPerfil';
import Button from '../components/atomos/button';
import '../assets/styles/persona.scss';

const Persona = (props) => {
  const { persona, getPersona } = props;
  const { id } = props.match.params;

  useEffect(() => {
    getPersona(id);
  }, []);

  return (
    <section className='Persona'>
      <div>
        <FotoPerfil img={persona.urlImg} alt={persona.name} />
        <p>En Linea</p>
      </div>
      <div>
        <h4>{persona.name}</h4>
        <h4>Genero: M</h4>
        <h4>{`Distancia: ${persona.distancia}`}</h4>
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
    persona: state.persona,
  };

};

const mapDispatchToProps = {
  getPersona,
};

export default connect(mapStateToProps, mapDispatchToProps)(Persona);
