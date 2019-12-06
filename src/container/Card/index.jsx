import React from 'react';
import './Card.scss';

const Card = ({ children, name, img, onClick }) => (
  <section className='Card' onClick={onClick}>
    <img src={img} alt={name} />
    {children}
  </section>
);

export default Card;
