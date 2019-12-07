import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FirebaseApp } from '../services/firebase/index';
import CardBig from '../container/cardBig';
import portada from '../assets/static/football_detalle.png';
import Ubicacion from '../assets/icons/Ubicacion.png';
import Participantes from '../assets/icons/Participantes.png';
import '../assets/styles/Evento.scss';

const evento = (props) => {
  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const { id } = props.match.params;
  const colectionEventos = FirebaseApp.firestore().collection('eventos');
  const [eventoDB, setEventoDB] = useState([]);
  useEffect(() => {
    const Evento = colectionEventos.doc(id).get()
      .then((data) => setEventoDB(data.data()))
      .catch((e) => console.log(e));
  }, []);
  return (
    <section className='Evento'>
      <CardBig>
        <img src={portada} alt={portada} />
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

  };

};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(evento);
