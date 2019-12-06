import React from 'react';
import EventosA from '../icons/Eventos-a.png';
import EventosI from '../icons/Eventos-i.png';
import LugaresA from '../icons/Lugares-a.png';
import LugaresI from '../icons/Lugares-i.png';
import PerfilA from '../icons/Perfil-a.png';
import PerfilI from '../icons/Perfil-i.png';
import PersonaA from '../icons/Persona-a.png';
import PersonaI from '../icons/Persona-i.png';
import './icons.scss';

const Icons = (props) => {
  const { type, state } = props

  switch (type) {
    case 'eventos':
      state ?
        <img className='icons' src={EventosA} alt='eventos' />
        :
        <img className='icons' src={EventosI} alt='eventos' />
      break;
    case 'lugares':
      state ?
        <img className='icons' src={LugaresA} alt='lugares' />
        :
        <img className='icons' src={LugaresI} alt='lugares' />
      break;
    case 'perfil':
      state ?
        <img className='icons' src={PerfilA} alt='perfil' />
        :
        <img className='icons' src={PerfilI} alt='perfil' />
      break; case 'personas':
      state ?
        <img className='icons' src={PersonaA} alt='Personas' />
        :
        <img className='icons' src={PersonaI} alt='evento' />
      break;
    default:
        <img className='icons' src={PersonaI} alt='evento' />
      break;
  }
  return (

  );
};

export default Icons;