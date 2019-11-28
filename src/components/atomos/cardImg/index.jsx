import React from 'react';
import FotoPerfil from '../fotoPerfil';
import './cardImg.scss';

const cardImg = ({ name, img, distancia, deporte, onClick }) => {
  return (
    <section className='cardImg' onClick={onClick}>
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
