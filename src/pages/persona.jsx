import React from 'react';
import perfil from '../assets/static/perfil.jpg';
const Persona = ({person}) => {
  return (
    <section>
     <img src={perfil} alt={person.name}/>
     <h4>Nombres</h4>
     <h4>Genero</h4>
     <h4>Distancia</h4>
     <h4>Gustos Deportivos</h4>
    </section>
      );
    };
    
    export default Persona;
