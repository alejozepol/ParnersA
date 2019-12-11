/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FirebaseApp } from '../services/firebase/index';
import CardBig from '../container/cardBig';
import Card from '../container/Card';
import Ubicacion from '../assets/icons/Ubicacion.png';
import IconHora from '../assets/icons/Hora.png';
import IconCalendario from '../assets/icons/Calendario.png';
import Participantes from '../assets/icons/Participantes.png';
import '../assets/styles/Persona.scss';

const Perfil = (props) => {
  const optionsDate = { year: '2-digit', month: 'short', day: 'numeric' };
  const user = JSON.parse(sessionStorage.getItem('user'));
  const colectionEventos = FirebaseApp.firestore().collection('eventos');
  const colectionEventoUsuario = FirebaseApp.firestore().collection('eventoUsuario');
  const [personaDB, setPersonaDB] = useState([]);
  const [eventosDB, setEventosDB] = useState([]);
  const [eventosDBInscrito, setEventosDBInscrito] = useState([]);
  useEffect(() => {
    const datoAsistente = [];
    colectionEventoUsuario
      .where('email', '==', user.email)
      .where('isTrue', '==', true)
      .get()
      .then((asistentes) => {
        asistentes.forEach((asistenteDoc) => {
          colectionEventos.doc(asistenteDoc.data().idEvento).get()
            .then((dAsistente) => {
              const detail = {
                ...dAsistente.data(),
              };
              datoAsistente.push(detail);
            })
            .catch((e) => console.log(e));
        });
        setEventosDBInscrito(datoAsistente);
      })
      .catch((e) => console.log(e));

  }, []);
  useEffect(() => {
    setPersonaDB(user);
  }, []);
  useEffect(() => {
    const datosEventosC = [];
    // eslint-disable-next-line no-unused-vars
    const creador = colectionEventos.where('creador', '==', user.email).get()
      .then((dataCreador) => {
        dataCreador.forEach((eventoC) => {
          const detail = {
            ...eventoC.data(),
          };
          datosEventosC.push(detail);
        });
        setEventosDB(datosEventosC);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <section className='Persona'>
      <CardBig>
        <div className='Persona__portada'>
          <img className='portada' src='https://picsum.photos/200/300' alt='portada' />
          <img className='photoPerfil' src={personaDB.photoURL} alt={personaDB.name} />
          <div className='Persona__portada-datos'>
            <h3>{personaDB.name}</h3>
            <h4>
              <img src={Ubicacion} alt='Ubicacion' />
              {personaDB.UBICACION ? (
                personaDB.UBICACION
              ) : (
                ' Bogotá'
              )}
            </h4>
          </div>
        </div>
        <div className='Persona_content'>
          <div className='Persona_content-creados'>
            <h4>Creados</h4>
            {eventosDB.map((e) => (
              <Link key={e.id} to={`evento/${e.id}`}>
                <Card key={e.id} img={`https://parners.co/iconsDeportes/${e.deporte}_1.png`}>
                  <div className='Eventos_content' key={e.id}>
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
                        <b>
                          {' '}
                          {`${e.CUPOS} `}
                          {' '}
                        </b>
                        Participantes
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className='Persona_content-inscritos'>
            <h4>Inscrito</h4>
            {eventosDBInscrito.map((e) => (
              <Link key={e.id} to={`evento/${e.id}`}>
                <Card key={e.id} img={`https://parners.co/iconsDeportes/${e.deporte}_1.png`}>
                  <div className='Eventos_content' key={e.id}>
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
                        <b>
                          {' '}
                          {`${e.CUPOS} `}
                          {' '}
                        </b>
                        Participantes
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </CardBig>
    </section>
  );
};

export default connect(null, null)(Perfil);
