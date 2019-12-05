import React from 'react';
import './Card.scss';

const Card = ({ user }) => {
  return (
    <section className='Cart'>
      <div className='Cart__img'>
        <img
          src={user.photoURL}
          alt={user.name}
        />
      </div>
      <div className='Cart__content'>
        <h4>{`${String(user.name).slice(0, 15)}...`}</h4>
        <p>{user.distancia}</p>
        {user.distancia && <p>{`Genero: ${user.distancia}`}</p>}
        <div className='Cart__content__img'>
          {/*           {user.deportes.map((d) => {
            <img src={d.img} alt={d.name} />;
          })} */}
        </div>
      </div>

    </section>
  );
};

export default Card;
