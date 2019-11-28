import React from 'react';
import './FotoPerfil.scss';

const FotoPerfil = ({ img, alt }) => {
  return (
    <section className='FotoPerfil'>
      <img src={img} alt={alt} />
    </section>
  );
};

export default FotoPerfil;
