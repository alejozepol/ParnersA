import React from 'react';
import formularioRegister from '../components/formularioRegister/index';
import '../assets/styles/index.scss';

const Registro = () => {
  return (
    <div>
      {React.createElement(formularioRegister)}
    </div>
  );
};

export default Registro;
