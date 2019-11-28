import React from 'react';
import '../assets/styles/index.scss';
import formularioRegister from '../components/formularioRegister/index';

const Registro = () => {
  return (
    <div>
      {React.createElement(formularioRegister)}
    </div>
  );
};

export default Registro;
