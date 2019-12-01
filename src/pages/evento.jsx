/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvento } from '../action';
import FotoPerfil from '../components/atomos/fotoPerfil';
import Button from '../components/atomos/button';
import '../assets/styles/persona.scss';

const evento = (props) => {
  const { evento, getEvento } = props;
  const { id } = props.match.params;

  useEffect(() => {
    getEvento(id);
  }, []);

  return (
    <section className='Persona'>
      <div>
        <FotoPerfil img={evento.urlImg} alt={evento.name} />
        <h4>{evento.name}</h4>
        <h3>{`ubicacion: ${evento.ubicacion}`}</h3>
      </div>
      <div>
        <h3>{`Creador: ${evento.creador}`}</h3>

        <p>{`Fecha: ${evento.dataTimeEven}`}</p>
        <p>{`Distancia: ${evento.distancia}`}</p>
        <p>{`duracion: ${evento.duracion}`}</p>
        <p>Gustos Deportivos</p>
        <p>{`descripcion: ${evento.descripcion}`}</p>
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
    evento: state.evento,
  };

};

const mapDispatchToProps = {
  getEvento,
};

export default connect(mapStateToProps, mapDispatchToProps)(evento);
