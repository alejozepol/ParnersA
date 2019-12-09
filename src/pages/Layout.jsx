/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import '../assets/styles/Layout.scss';

const Layout = (props) => {
  return (
    <section className='Layout'>
      <div className='Layout__header'>
        <Header dir={props.location.pathname} />
      </div>
      <div className='Layout__contenido'>
        {props.children}
      </div>
      <div className='Layout__footer'>
        <Footer dir={props.location.pathname} />
      </div>
    </section>
  );
};

export default connect(null, null)(Layout);
