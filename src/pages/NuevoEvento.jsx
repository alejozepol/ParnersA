import React from 'react';
import { connect } from 'react-redux';
import CardBig from '../container/cardBig';
import Isotipo from '../assets/static/Isotipo-bgPrimario.png';
import '../assets/styles/NuevoEvento.scss';

const NuevoEventos = (props) => {
  return (
    <section className='NuevoEvento'>
      <CardBig>
        <img src={Isotipo} alt='Parners' />
      </CardBig>
    </section>

  );
};

export default connect(null, null)(NuevoEventos);
