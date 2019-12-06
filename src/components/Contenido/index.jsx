import React, { useState } from 'react';
import './Contenido.scss';
import bg1 from '../../assets/static/1.png';
import bg2 from '../../assets/static/2.png';
import bg3 from '../../assets/static/3.png';
import bgm1 from '../../assets/static/m1.png';
import bgm2 from '../../assets/static/m2.png';
import bgm3 from '../../assets/static/m3.png';

const Contenido = ({ children }) => {
  const [bg, setBg] = useState(bg1);
  const [bgm, setBgm] = useState(bgm1);

  if (bg == bg1) {
    setTimeout(() => {
      setBg(bg2);
      setBgm(bgm2);
      setTimeout(() => {
        setBg(bg3);
        setBgm(bgm3);
        setTimeout(() => {
          setBg(bg1);
          setBgm(bgm1);
        }, 3000);
      }, 3000);
    }, 3000);
  }
  return (
    <section className='Contenido'>
      <img src={bg} alt='fondo Deporte' className='Contenido__img' />
      <img src={bgm} alt='fondo Deporte' className='Contenido__img-movil' />
      {children}
    </section>
  );
};

export default Contenido;
