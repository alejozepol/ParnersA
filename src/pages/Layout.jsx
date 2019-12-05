/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

const Layout = (props) => {
  return (
    <section className='Layout'>
      <div className='Layout__header'>
        Header
      </div>
      <div className='Layout__contenido'>
        {props.children}
      </div>
      <div className='Layout__footer'>
        footer
      </div>
    </section>
  );
};

export default connect(null, null)(Layout);
