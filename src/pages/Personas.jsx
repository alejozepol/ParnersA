import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FirebaseApp } from '../services/firebase/index';
import Card from '../container/Card';
import Ubicacion from '../assets/icons/Ubicacion.png';
import '../assets/styles/Personas.scss';

const Personas = (props) => {
  const { user } = props;
  const colectionPersonas = FirebaseApp.firestore().collection('user');
  const [personasDB, setPersonasDB] = useState([]);
  useEffect(() => {
    const listEvento = colectionPersonas.onSnapshot(({ docs }) => {
      const personasFromDB = [];
      docs.forEach((doc) => {
        const details = {
          id: doc.id,
          ...doc.data(),
        };

        personasFromDB.push(details);
      });
      personasFromDB.find((item) => item.EMAIL === user.EMAIL);
      setPersonasDB(personasFromDB);
    });
  }, []);
  return (
    <section className='Personas'>
      {personasDB.map((e) => (
        <Card img={e.photoURL} key={e.id}>
          <div className='Personas_content'>
            <Link to={`persona/${e.EMAIL}`}>
              <h3>{e.name}</h3>
              <h4>
                <img src={Ubicacion} alt='Ubicacion' />
                {e.UBICACION ? (
                  e.UBICACION
                ) : (
                  ' Bogotá'
                )}

              </h4>
            </Link>
            <button type='button'>+</button>
          </div>
        </Card>
      ))}

    </section>
  );

};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Personas);
