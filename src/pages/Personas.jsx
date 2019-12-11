import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FirebaseApp } from '../services/firebase/index';
import Card from '../container/Card';
import Ubicacion from '../assets/icons/Ubicacion.png';
import '../assets/styles/Personas.scss';

const Personas = (props) => {
  const colectionPersonas = FirebaseApp.firestore().collection('user');
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [personasDB, setPersonasDB] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const listEvento = colectionPersonas.onSnapshot(({ docs }) => {
      const personasFromDB = [];
      docs.forEach((doc) => {
        const details = {
          id: doc.id,
          ...doc.data(),
        };
        if (details.EMAIL !== user.email) {
          personasFromDB.push(details);
        }
      });
      setPersonasDB(personasFromDB);
    });
  }, []);
  return (
    <section className='Personas'>
      {personasDB.map((e) => (
        <Card img={e.photoURL} key={e.id}>
          <div className='Personas_content'>
            <Link to={`persona/${e.EMAIL}`}>
              <h3>{`${String(e.name).slice(0, 15)}...`}</h3>
              <h4>
                <img src={Ubicacion} alt='Ubicacion' />
                {e.UBICACION ? (
                  e.UBICACION
                ) : (
                  ' Bogotá'
                )}

              </h4>
            </Link>
          </div>
        </Card>
      ))}

    </section>
  );

};

const mapStateToProps = (state) => {
};

export default connect(mapStateToProps, null)(Personas);
