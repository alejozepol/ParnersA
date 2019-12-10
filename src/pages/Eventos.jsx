import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FirebaseApp } from '../services/firebase/index';
import Card from '../container/Card';
import portada from '../assets/static/football.png';
import Ubicacion from '../assets/icons/Ubicacion.png';
import Participantes from '../assets/icons/Participantes.png';
import IconHora from '../assets/icons/Hora.png';
import IconCalendario from '../assets/icons/Calendario.png';
import IconDuracion from '../assets/icons/Duracion.png';
import '../assets/styles/Eventos.scss';

const Eventos = (props) => {
  const optionsDate = { year: '2-digit', month: 'short', day: 'numeric' };
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
              <h3>{`${String(e.TITULO)}...`}</h3>
              <div className='Eventos_content_ubicacion'>
                <img src={Ubicacion} alt='Ubicacion' />
                <p>{`  ${e.UBICACION}`}</p>
              </div>
              <div className='Eventos_content_date'>
                <img src={IconCalendario} alt='Calendario' />
                <p>{` ${new Date(e.FECHA).toLocaleDateString('es-ES', optionsDate)}  `}</p>
                <img src={IconHora} alt='Hora' className='reloj-icon' />
                <p>{` ${e.HORAINICIAL}`}</p>
              </div>
              <div className='Eventos_content_cupos'>
                <img src={Participantes} alt='Ubicacion' />
                <p>
                  <b> {`${e.CUPOS} `} </b>
                  Participantes
                </p>
              </div>

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
