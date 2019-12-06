import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FirebaseApp } from '../services/firebase/index';
import Card from '../container/Card';
import portada from '../assets/static/football.png';
import '../assets/styles/Eventos.scss';

const Eventos = (props) => {
  const colectionEventos = FirebaseApp.firestore().collection('eventos');
  const [eventosDB, setEventosDB] = useState([]);
  useEffect(() => {
    const listEvento = colectionEventos.onSnapshot(({ docs }) => {
      const eventosFromDB = [];
      docs.forEach((doc) => {
        const details = {
          id: doc.id,
          ...doc.data(),
        };

        eventosFromDB.push(details);
      });
      setEventosDB(eventosFromDB);
    });
    return () => listEvento();
  }, []);
  console.log(eventosDB);
  return (
    <section className='Eventos'>
      {eventosDB.map((e) => (
        <Card img={portada}>
          <div className='Eventos_content'>
            <h3>{e.TITULO}</h3>
            <h4>{e.UBICACION}</h4>
            <p>{e.HORAINICIAL}</p>
            <p>{e.FECHA}</p>
            <p>{e.CUPOS}</p>
          </div>
        </Card>
      ))
      }

    </section >
  );

};

export default connect(null, null)(Eventos);
