import React from 'react';
import { connect } from 'react-redux';
import Eventos from './Eventos';

const Home = (props) => {
  return (
    <>
      <Eventos />
    </>
  );
};

export default connect(null, null)(Home);
