import React from 'react';
import './ContainerCard.scss';

const ContainerCard = ({ title, children, onClick }) => {
  return (
    <section className='ContainerCard'>
      <div className='ContainerCard__title'>
        <h3>{title}</h3>
        <p>ver mas</p>
      </div>
      <div className='ContainerCard__content'>
        {children}
      </div>
    </section>
  );
};

export default ContainerCard;
