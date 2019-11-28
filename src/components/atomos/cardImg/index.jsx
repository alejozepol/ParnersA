import React from 'react';
import FotoPerfil from '../fotoPerfil';
import './cardImg.scss';

const cardImg = ({ name, img, distancia, deporte }) => {
  return (
    <section className='cardImg'>
      <FotoPerfil img={img} alt={name} />
      <div className='cardImg_content'>
        <p>{name}</p>
        <small>{distancia}</small>
      </div>
      <p>{deporte}</p>
    </section>
  );
};

export default cardImg;
