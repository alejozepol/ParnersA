import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FirebaseApp } from '../services/firebase/index';
import CardBig from '../container/cardBig';
import Button from '../components/button';
import portada from '../assets/static/football_detalle.png';
import Ubicacion from '../assets/icons/Ubicacion.png';
import Participantes from '../assets/icons/Participantes.png';
import '../assets/styles/Evento.scss';

const evento = (props) => {
  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const { id } = props.match.params;
  const colectionEventos = FirebaseApp.firestore().collection('eventos');
  const colectionEventoUsuario = FirebaseApp.firestore().collection('eventoUsuario');
  const { email } = FirebaseApp.auth().currentUser;
  const [eventoDB, setEventoDB] = useState({
    isTrue: false,
    email,
    idEvento: id,
  });
  const [eventoUsuarioBD, setEventoUsuarioBD] = useState([]);

  useEffect(() => {
    const Evento = colectionEventos.doc(id).get()
      .then((data) => setEventoDB(data.data()))
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    email === 'undefined' && 'a@a.com';
    const EventoUsuario = colectionEventoUsuario.doc(email).get()
      .then((data) => setEventoUsuarioBD(data.data()))
      .catch((e) => console.log(e));
  }, []);

  function suscripcion() {
    let info = eventoUsuarioBD;
    if (eventoUsuarioBD) {
      info.isTrue ? info.isTrue = false : info.isTrue = true;
    } else {
      info = {
        isTrue: true,
        email,
        idEvento: id,
      };
    }
    colectionEventoUsuario
      .doc(email)
      .set(info)
      .then()
      .catch((error) => error);
  }
  return (
    <section className='Evento'>
      <CardBig>
        <div>
          <img src={portada} alt={portada} />
          {eventoUsuarioBD.isTrue ? (
            <button type='button' className='unsuscrited' onClick={() => suscripcion()}>No Aistire</button>
          ) : (
            <button type='button' className='suscribir' onClick={() => suscripcion()}>Inscribirme</button>
          )}
        </div>
        <div className='Evento_content'>
          <div>
            <h3>{eventoDB.TITULO}</h3>
            <h4>
              <img src={Ubicacion} alt='Ubicacion' />
              {`  ${eventoDB.UBICACION}`}
            </h4>
            <p>{eventoDB.DESCRIPCION}</p>
          </div>
          <div>
            <p>{new Date(eventoDB.FECHA).toLocaleDateString('es-ES', optionsDate)}</p>
            <p>{eventoDB.HORAINICIAL}</p>
            <p>
              <img src={Ubicacion} alt='Ubicacion' />
              {`  ${eventoDB.UBICACION}`}
            </p>
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
    ...state,
  };

};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(evento);
