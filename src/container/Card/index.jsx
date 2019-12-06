import React from 'react';
import './Card.scss';

const Card = ({ children, name, img }) => (
  <section className='Card'>
    <img src={img} alt={name} />
    {children}
  </section>
);

export default Card;
