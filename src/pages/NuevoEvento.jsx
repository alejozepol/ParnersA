import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FirebaseApp } from '../services/firebase/index';
import CardBig from '../container/cardBig';
import Input from '../components/Input';
import Isotipo from '../assets/static/Isotipo-bgPrimario.png';
import '../assets/styles/NuevoEvento.scss';

const NuevoEventos = (props) => {
  const [deportes, setDeportes] = useState([]);
  const [form, setForm] = useState({
    deportes: '',
  });
  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };
  const colectionDeportes = FirebaseApp.firestore().collection('deportes');

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

  return (
    <section className='NuevoEvento'>
      <CardBig>
        <img src={Isotipo} alt='Parners' />
        <form className='NuevoEvento__form'>
          <div className='NuevoEvento__form__deportes'>
            <p>Para empezar</p>
            <h2>Selecciona el deporte</h2>
            <div className='NuevoEvento__form__deportes-contenedor'>
              {deportes.map((d) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label className='NuevoEvento__form__deportes-input' key={d.id}>
                  <input onChange={handleInput} type='radio' name='deportes' value={d.id} />
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
            <Input name='Titulo' placeholder='Titulo' onChange={handleInput} />
            <Input name='Descripcion' placeholder='Descripción' onChange={handleInput} />
            <Input type='number' name='cupos' placeholder='# de participante' onChange={handleInput} />
            <Input type='date' name='Fecha' placeholder='Fecha' onChange={handleInput} />
            <Input type='time' name='HoraInicial' placeholder='Hora Inicio' onChange={handleInput} />
            <Input type='number' name='Duracion' placeholder='Duración' />
            <Input name='Ubicacion' placeholder='Ubicación' onChange={handleInput} />
          </div>
        </form>
      </CardBig>
    </section>

  );
};

export default connect(null, null)(NuevoEventos);
