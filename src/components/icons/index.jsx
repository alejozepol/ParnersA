import React from 'react';
import EventosA from '../../assets/icons/Eventos-a.png';
import EventosI from '../../assets/icons/Eventos-i.png';
import LugaresA from '../../assets/icons/Lugares-a.png';
import LugaresI from '../../assets/icons/Lugares-i.png';
import PerfilA from '../../assets/icons/Perfil-a.png';
import PerfilI from '../../assets/icons/Perfil-i.png';
import PersonaA from '../../assets/icons/Persona-a.png';
import PersonaI from '../../assets/icons/Persona-i.png';
import Atras from '../../assets/icons/atras.png';
import './icons.scss';

const Icons = ({ type, dir, state }) => {

  switch (type) {
    case 'eventos':
      return (dir === '/' || type === String(dir).slice(1) ?
        <img className='icons' src={EventosA} alt='eventos' /> :
        <img className='icons' src={EventosI} alt='eventos' />);
    case 'lugares':
      return (type === String(dir).slice(1) ?
        <img className='icons' src={LugaresA} alt='lugares' /> :
        <img className='icons' src={LugaresI} alt='lugares' />);
    case 'perfil':
      return (type === String(dir).slice(1) ?
        <img className='icons' src={PerfilA} alt='perfil' /> :
        <img className='icons' src={PerfilI} alt='perfil' />);
    case 'personas':
      return (type === String(dir).slice(1) ?
        <img className='icons' src={PersonaA} alt='Personas' /> :
        <img className='icons' src={PersonaI} alt='evento' />);
    case 'atras':
      return <img className='icons' src={Atras} alt='atras' />;
    default:
      return <img className='icons' src={Atras} alt='atras' />;
  }
};

export default Icons;
