/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/*v=spf1 include:_spf.colhost.com include:md02.com -all*/
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FirebaseApp } from '../services/firebase';
import CardBig from '../container/cardBig';
import Button from '../components/button';
import PortadaDeportes from '../components/portadaDeportes';
import Ubicacion from '../assets/icons/Ubicacion.png';
import Participantes from '../assets/icons/Participantes.png';
import IconHora from '../assets/icons/Hora.png';
import IconCalendario from '../assets/icons/Calendario.png';
import IconDuracion from '../assets/icons/Duracion.png';
import '../assets/styles/Evento.scss';

const evento = (props) => {
  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const { id } = props.match.params;
  const user = JSON.parse(sessionStorage.getItem('user'));
  const colectionEventos = FirebaseApp.firestore().collection('eventos');
  const colectionEventoUsuario = FirebaseApp.firestore().collection('eventoUsuario');
  const colectionPersonas = FirebaseApp.firestore().collection('user');
  const [eventoDB, setEventoDB] = useState([]);
  const [infoAsistentes, setInfoAsistentes] = useState([]);
  const [infoCreador, setinfoCreador] = useState([]);
  const [btnEvento, setBtnEvento] = useState(false);

  useEffect(() => {
    const datoAsistente = [];
    colectionEventoUsuario.where('idEvento', '==', id)
      .get()
      .then((asistentes) => {
        asistentes.forEach((asistenteDoc) => {
          colectionPersonas.doc(asistenteDoc.data().email).get()
            .then((dAsistente) => {
              const detail = {
                ...dAsistente.data(),
              };
              datoAsistente.push(detail);
            })
            .catch((e) => console.log(e));
        });
      })
      .catch((e) => console.log(e));
    setInfoAsistentes(datoAsistente);
  }, []);

  useEffect(() => {
    const Evento = colectionEventos.doc(id).get()
      .then((data) => {
        setEventoDB(data.data());
        const { creador } = data.data();
        colectionPersonas.doc(creador).get()
          .then((dataCreador) => {
            setinfoCreador(dataCreador.data());
          })
          .catch((e) => console.log(e));
      })
      .then(() => {
        colectionEventoUsuario
          .where('email', '==', user.email)
          .where('idEvento', '==', id)
          .get()
          .then((data) => {
            if (data.size) {
              data.forEach((doc) => {
                const dataDoc = doc.data();
                setBtnEvento(dataDoc.isTrue);
              });
            }
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, []);

  function suscripcion() {
    colectionEventoUsuario
      .where('email', '==', user.email)
      .where('idEvento', '==', id)
      .get()
      .then((data) => {
        if (data.size) {
          data.forEach((doc) => {
            const dataDoc = doc.data();
            dataDoc.isTrue ? dataDoc.isTrue = false : dataDoc.isTrue = true;
            setBtnEvento(dataDoc.isTrue);
            colectionEventoUsuario
              .doc(doc.id)
              .set(dataDoc)
              .then()
              .catch((error) => error);
          });

        } else {
          const info = {
            email: user.email,
            idEvento: id,
            isTrue: true,
          };
          colectionEventoUsuario
            .add(info)
            .then()
            .catch((e) => console.log(e));
        }
      })
      .catch((e) => console.log(e));
  }
  return (
    <section className='Evento'>
      <CardBig>
        <div className='Evento__portada'>
          <PortadaDeportes deporte={eventoDB.deporte} />
          {user.login && (
            btnEvento ? (
              <button type='button' className='unsuscrited' onClick={() => suscripcion()}>X Cancelar</button>
            ) : (
                <button type='button' className='suscribir' onClick={() => suscripcion()}>+ Asistir</button>
              )
          )}
        </div>
        <div className='Evento_content'>
          <div className='Evento_content_top'>
            <h3>{eventoDB.TITULO}</h3>
            <h4>
              <img src={Ubicacion} alt='Ubicacion' />
              {`  ${eventoDB.UBICACION}`}
            </h4>
            <div>
              <img src={IconCalendario} alt='Calendario' />
              <p>{` ${new Date(eventoDB.FECHA).toLocaleDateString('es-ES', optionsDate)}  `}</p>
            </div>
            <div>
              <img src={IconHora} alt='Hora' className='reloj-icon' />
              <p>{` ${eventoDB.HORAINICIAL}`}</p>
            </div>
            <div>
              <img src={IconDuracion} alt='Hora' className='duracion-icon' />
              <p>{` ${eventoDB.DURACION}`}</p>
            </div>
          </div>
          <div className='Evento_content_descripcion'>
            <h4>Descripción</h4>
            <p>{eventoDB.DESCRIPCION}</p>
          </div>
          <div className='Evento_content_asistente'>
            <h4>Asistentes</h4>
            <div className='Evento_content_asistente-content'>
              {infoAsistentes.map((item) => (
                <div key={item.id} className='Evento_content_asistente-content--item'>
                  <p>{item.name}</p>
                  <img
                    src={item.photoURL}
                    alt={item.name}
                    className='img-redonda'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardBig>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    user: state.user,
  };

};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(evento);
