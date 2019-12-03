/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Buscador from '../components/buscador';
import '../assets/styles/layout.scss';

const Layout = (props) => {
  return (
    <section className='Layout'>
      <div className='Layout__header'>
        <Buscador isHome />
        <i className='material-icons'>
          notifications
        </i>
      </div>
      <div className='Layout__contenido'>
        {props.children}
      </div>
      <div className='Layout__footer'>
        <i className='material-icons'>
          person_pin
        </i>
        <i className='material-icons'>
          local_play
        </i>
        <i className='material-icons'>
          add
        </i>
        <i className='material-icons'>
          directions
        </i>
        {props.user.photoURL ?
          (
            <img
              src={props.user.photoURL}
              alt={props.user.name}
              className='Layout__footer__img'
            />
          ) : (
            <i className='material-icons'>
              sentiment_very_satisfied
            </i>
          )}
      </div>
    </section>
  );
};
const mapStatecToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStatecToProps, null)(Layout);
