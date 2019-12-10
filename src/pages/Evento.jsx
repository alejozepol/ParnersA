/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FirebaseApp } from '../services/firebase';
import CardBig from '../container/cardBig';
import Button from '../components/button';
import portada from '../assets/static/football_detalle.png';
import Ubicacion from '../assets/icons/Ubicacion.png';
import Participantes from '../assets/icons/Participantes.png';
import '../assets/styles/Evento.scss';

const evento = (props) => {
  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const { id } = props.match.params;
  const user = JSON.parse(sessionStorage.getItem('user'));
  const colectionEventos = FirebaseApp.firestore().collection('eventos');
  const colectionEventoUsuario = FirebaseApp.firestore().collection('eventoUsuario');
  const [eventoDB, setEventoDB] = useState([]);
  const [btnEvento, setBtnEvento] = useState(false);

  useEffect(() => {
    const Evento = colectionEventos.doc(id).get()
      .then((data) => setEventoDB(data.data()))
      .then(
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
          .catch((e) => console.log(e)),
      )
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
        <div>
          <img src={portada} alt={portada} />
          {btnEvento ? (
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
    user: state.user,
  };

};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(evento);
