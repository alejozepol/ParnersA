/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPersona } from '../action';

const Persona = (props) => {
  const { persona, getPersona } = props;
  const { id } = props.match.params;

  useEffect(() => {
    getPersona(id);
  }, []);

  return (
    <section>
      <img src={persona.urlImg} alt={persona.name} />
      <h4>Nombres</h4>
      <h4>Genero</h4>
      <h4>Distancia</h4>
      <h4>Gustos Deportivos</h4>
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
