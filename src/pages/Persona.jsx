/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FirebaseApp } from '../services/firebase/index';
import CardBig from '../container/cardBig';
import portada from '../assets/static/football_detalle.png';
import Ubicacion from '../assets/icons/Ubicacion.png';
import '../assets/styles/Persona.scss';

const Persona = (props) => {
  const { id } = props.match.params;
  const colectionPersonas = FirebaseApp.firestore().collection('user');
  const [personaDB, setPersonaDB] = useState([]);
  useEffect(() => {
    const Persona = colectionPersonas.doc(id).get()
      .then((data) => setPersonaDB(data.data()))
      .catch((e) => console.log(e));
  }, []);
  console.log(personaDB);
  return (
    <section className='Persona'>
      <CardBig>
        <img src='https://picsum.photos/200/300' alt='portada' />
        <div className='Persona_content'>
          <div>
            <h3>{personaDB.name}</h3>
            <h4>
              <img src={Ubicacion} alt='Ubicacion' />
              {personaDB.UBICACION ? (
                personaDB.UBICACION
              ) : (
                ' Bogotá'
              )}
            </h4>
            <p>{personaDB.DESCRIPCION}</p>
          </div>
          <div>
            asistentes
          </div>
        </div>
      </CardBig>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {

  };

};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Persona);
