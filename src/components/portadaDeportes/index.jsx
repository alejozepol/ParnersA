import React from 'react';
import './PortadaDeportes.scss';

const PortadaDeportes = ({ deporte }) => {
  const URLBase = 'https://parners.co/iconsDeportes/';
  return (
    <div className='PortadaDeportes'>
      <img className='PortadaDeportes-fondo' src={`${URLBase}${deporte}_1.png`} alt={deporte} />
      <img className='PortadaDeportes-icon' src={`${URLBase}${deporte}_A.png`} alt={deporte} />
    </div>
  );
};

export default PortadaDeportes;
