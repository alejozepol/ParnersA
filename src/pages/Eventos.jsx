import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FirebaseApp } from '../services/firebase/index';
import Card from '../container/Card';
import portada from '../assets/static/football.png';
import Ubicacion from '../assets/icons/Ubicacion.png';
import Participantes from '../assets/icons/Participantes.png';
import '../assets/styles/Eventos.scss';

const Eventos = (props) => {
  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const user = JSON.parse(sessionStorage.getItem('user'));
  const colectionEventoUsuario = FirebaseApp.firestore().collection('eventoUsuario');
  const colectionEventos = FirebaseApp.firestore().collection('eventos');
  const [eventosDB, setEventosDB] = useState([]);
  const [btnEvento, setBtnEvento] = useState(false);

  useEffect(() => {
    const listEvento = colectionEventos.onSnapshot(({ docs }) => {
      const eventosFromDB = [];
      docs.forEach((doc) => {
        const details = {
          id: doc.id,
          ...doc.data(),
        };
        colectionEventoUsuario
          .where('email', '==', user.email)
          .where('idEvento', '==', details.id)
          .get()
          .then((data) => {
            if (data.size) {
              data.forEach((doc) => {
                const dataDoc = doc.data();
                setBtnEvento(dataDoc.isTrue);
              });
            }
          })
          .catch((e) => console.log(e)),
        eventosFromDB.push(details);
      });
      setEventosDB(eventosFromDB);
    });
    return () => listEvento();
  }, []);

  return (
    <section className='Eventos'>
      {eventosDB.map((e) => (
        <Card img={portada} key={e.id}>
          <div className='Eventos_content'>
            <Link to={`evento/${e.id}`}>
              <h4>{e.TITULO}</h4>
              <h4>
                <img src={Ubicacion} alt='Ubicacion' />
                {`  ${e.UBICACION}`}
              </h4>
              <p>{e.HORAINICIAL}</p>
              <p>{new Date(e.FECHA).toLocaleDateString('es-ES', optionsDate)}</p>
              <p>
                <img src={Participantes} alt='Ubicacion' />
                {` ${e.CUPOS} Participantes`}
              </p>
            </Link>
            {!btnEvento && (
              <button type='button'>+</button>
            )}
          </div>
        </Card>
      ))}

    </section>
  );

};

const mapDispatchToProps = {
};

export default connect(null, mapDispatchToProps)(Eventos);
