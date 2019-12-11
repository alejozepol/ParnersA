import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FirebaseApp } from '../services/firebase/index';
import CardBig from '../container/cardBig';
import Input from '../components/Input';
import Isotipo from '../assets/static/Isotipo-bgPrimario.png';
import '../assets/styles/NuevoEvento.scss';

const NuevoEventos = (props) => {
  const colectionDeportes = FirebaseApp.firestore().collection('deportes');
  const colectionEventos = FirebaseApp.firestore().collection('eventos');
  const islogin = FirebaseApp.auth().currentUser;
  const [deportes, setDeportes] = useState([]);
  const [form, setForm] = useState({ deportes: '' });

  useEffect(() => {
    const listDeportes = colectionDeportes.onSnapshot(({ docs }) => {
      const deportesFromDB = [];
      docs.forEach((doc) => {
        const details = {
          id: doc.id,
          iconA: doc.data().iconA,
          iconI: doc.data().iconI,
          state: false,
        };

        deportesFromDB.push(details);
      });
      setDeportes(deportesFromDB);
    });
    return () => listDeportes();
  }, []);

  const CrearEvento = (data) => {
    colectionEventos.add(data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      creador: islogin.email,
      date: Date.now(),
    });
  };
  const handlSubmit = (event) => {
    event.preventDefault();
    CrearEvento(form);
    props.history.push('/');
  };
  return (
    <section className='NuevoEvento'>
      <CardBig>
        <img src={Isotipo} alt='Parners' />
        <form className='NuevoEvento__form' onSubmit={handlSubmit}>
          <div className='NuevoEvento__form__deportes'>
            <p>Para empezar</p>
            <h2>Selecciona el deporte</h2>
            <div className='NuevoEvento__form__deportes-contenedor'>
              {deportes.map((d) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label className='NuevoEvento__form__deportes-input' key={d.id}>
                  <input onChange={handleInput} type='radio' name='deporte' value={d.id} required />
                  {form.deportes === d.id ? (
                    <img src={d.iconA} alt={d.id} key={d.id} />
                  ) : (
                    <img src={d.iconI} alt={d.id} key={d.id} />
                  )}
                </label>
              ))}
            </div>
          </div>
          <div className='NuevoEvento__form__detalle'>
            <h2>Detalles</h2>
            <Input type='text' name='Titulo' placeholder='Titulo' onChange={handleInput} />
            <Input name='Descripcion' placeholder='Descripción' onChange={handleInput} />
            <Input type='numberN' name='cupos' placeholder='# de participante' onChange={handleInput} />
            <Input type='date' name='Fecha' placeholder='Fecha' onChange={handleInput} />
            <Input type='time' name='HoraInicial' placeholder='Hora Inicio' onChange={handleInput} />
            <Input type='time' name='Duracion' placeholder='Duración' onChange={handleInput} />
            <Input name='Ubicacion' placeholder='Ubicación' onChange={handleInput} />
          </div>
          <button type='submit'>Crear Evento</button>
        </form>
      </CardBig>
    </section>

  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };

};
export default connect(mapStateToProps, null)(NuevoEventos);
