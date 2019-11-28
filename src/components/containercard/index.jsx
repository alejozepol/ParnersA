import React from 'react';

const ContainerCard = ({ title, children }) => {
  return (
    <section className='ContainerCard'>
      <div className='ContainerCard__title'>
        {title}
        ver mas
      </div>
      <div className='ContainerCard__content'>
        {children}
      </div>
    </section>
  );
};

export default ContainerCard;
