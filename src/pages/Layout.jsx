/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Layout.scss';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = (props) => {
  const { user } = props;
  return (
    <section className='Layout'>
      <div className='Layout__header'>
        <Header dir={props.location.pathname} />
      </div>
      <div className='Layout__contenido'>
        {props.children}
      </div>
      <div className='Layout__footer'>
        <Footer dir={props.location.pathname} photoURL={user.photoURL} />
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Layout);
