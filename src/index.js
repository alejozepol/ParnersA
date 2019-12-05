import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { FirebaseContext, Firebase } from './services/firebase';
import reducer from './reducers';
import App from './routes';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: [],
  persona: [],
  lugar: [],
  evento: [],
  personas: [
    {
      EMAIL: 'galopez683@misena.edu.co',
      PASSWORD: '',
      id: '40iBqKP3ksNpSjMijXFCx4L550X2',
      name: 'GUIDO ALEJANDRO LOPEZ RAMIREZ',
      photoURL: 'https://lh3.googleusercontent.com/a-/AAuE7mAHBZk8M8-UIEeopQHG_Yt-nF6YKf9rXbx5qbEp',
    } ],
  eventos: [
    {
      id: 20,
      name: 'partido futbol 5',
      creador: 'Alejandro Lopez',
      photoURL: 'https://bogota.gov.co/sites/default/files/u1011/canchas2.jpg',
      email: 'alejozepol@gmail.com',
      dataTimeEven: '30 Nov 2019 10:00am',
      duracion: '1 hora',
      deporte: ['Futbol'],
      ubicacion: 'Cra. 98 # 18a-23, Bogotá, Cundinamarca, fontibon',
      descripcion: 'El fútbol es sinónimo de pasión. Por eso, te invitamos a vivir, sentir y         disfrutar del deporte más hermoso del mundo',
    },
    {
      id: 21,
      name: 'torneo de baloncesto',
      creador: 'Cristian Guzman',
      photoURL: 'https://contenidos.civico.com/wp-content/uploads/2014/09/baloncesto-texto.jpg',
      email: 'ccgm9108@gmail.com',
      dataTimeEven: '1 Dic 2019 8:00am',
      duracion: '1 hora',
      deporte: ['Basketball'],
      ubicacion: 'Cra. 98 Bis #68-44, Bogotá, Alamos',
      descripcion: 'Te invitamos al Torneo de Baloncesto este 01 de diciembre 2019. ¡Ven a apoyar a nuestros equipos Junior Varsity (femenino/masculino)',
    },
    {
      id: 22,
      name: 'recocha de baloncesto',
      creador: 'Farid Ramirez',
      urlImg: 'https://portaplast.co/images/contenidos/cancha-anti-vandalica.jpg',
      email: 'farid.sebastianramirez@gmail.com',
      dataTimeEven: '28 Nov 2019 12:00pm',
      duracion: '1 hora',
      deporte: ['Basketball'],
      ubicacion: 'Cra. 48, Bogotá, Cundinamarca, Las villas',
      descripcion: 'Te invitamos a un momento de dispercion buscamos gente que se quiera divertir con el deporte sin importar si eres (femenino/masculino)',
    },
    {
      id: 23,
      name: 'Torneo Relámpago Tenis',
      creador: 'Julian Torres',
      urlImg: 'https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/02/12/15499357452354.png',
      email: 'juliantorresfer182@gmail.com',
      dataTimeEven: '17  y 18 de Dic 2019 9:00 am',
      duracion: '1 hora',
      deporte: ['Tenis'],
      ubicacion: 'Cra. 48, Bogotá, Cundinamarca, Las villas',
      descripcion: 'Te invitamos a participar en el Torneo Relámpago Tenis Dobles Tercera Categoría este 17 y 18 de diciembre; premiación para el campeón y subcampeón.',
    },
    {
      id: 24,
      name: 'Torneo Relámpago Tenis',
      creador: 'Hugo',
      urlImg: 'https://www.eltiempo.com/files/article_main/uploads/2018/06/09/5b1c43b82f6b0.jpeg',
      email: 'hugo@gmail.com',
      dataTimeEven: '30 de Nov 2019 6:00 pm',
      duracion: '1 hora',
      deporte: ['bolos'],
      ubicacion: 'Transversal 99 No. 70A-89 Centro Comercial Diver Plaza Local 241C Zona D - Alamos, Bogotá',
      descripcion: 'Invitación especial para todos los jovenes adultos de los 18 a 30 años. Este sabado a las 18:00 " Juguemos BOLOS". Es una gran oportunidad para conocernos y divertirnos. Costo 29 por persona.Confirma tu asistencia para reservar puesto. Te esperamos',
    },
    {
      id: 25,
      name: 'Torneo Relámpago Tenis',
      creador: 'Paco',
      urlImg: 'https://periodicoeljurista.com.co/wp-content/uploads/2019/08/ciclon.jpg',
      email: 'paco@gmail.com',
      dataTimeEven: 'Jueves, 12 de diciembre de 2019 de 17:00 a 23:59',
      duracion: '2 hora',
      deporte: ['ciclismo'],
      ubicacion: 'N, Cra. 7 # 28-66, Bogotá Museo nacional',
      descripcion: ' los invita a gozarse la capital. En el marco de las actividades que nos prepara la capital para navidad, llega nuestra ansiada Ciclovía Nocturna. El evento será el próximo jueves 12 de diciembre desde las las convencionales vías habilitadas para la ciclovía. .',
    },
  ],
  lugares: [
    {
      id: 30,
      name: 'Parque Metropolitano Simón Bolívar',
      urlImg: 'https://www.eltiempo.com/files/article_main/uploads/2018/08/04/5b664efda0b80.jpeg',
      ubicacion: 'Av. Calle 53 y Av. Esmeralda #s/n, Bogotá, Cundinamarca',
      InformaciónGeneral: 'Parque Central Simón Bolívar Extensión total: 113 hectáreas Extensión del lago: 11 hectáreas Red de caminos: 16 Kilómetros Unidad de servicio: 6 cafeterías y baños Parqueadero: Con capacidad para 80 vehículos Puntos de encuentro: 11 kioscos Número de accesos: Seis(6)',
    },
    {
      id: 31,
      name: 'Parque Metropolitano El Tunal',
      urlImg: 'http://www.tunjuelito.gov.co/sites/tunjuelito.gov.co/files/styles/disfrutanlo_mi_localidad/public/localidad/imagenes/parque_el_tunal.134.jpg?itok=W5RQO57J',
      ubicacion: 'Cra. 19 #52B-15, Bogotá',
      InformaciónGeneral: 'Durante los fines de semana el recinto lúdico alberga simultáneamente a más de 50 mil personas de todas las edades, la mayoría de los visitantes pertenecen a barrios como: Ciudad Bolívar, Cazuca, Restrepo, 20 de Julio, San Carlos, San Benito, Meissen, Santa Lucía, entre otros. HORARIOS DE ATENCIÓN: 5: 30 a.m.a 6: 00 p.m.',
    },
    {
      id: 32,
      name: 'Parque Zonal La Consolación Metrópolis',
      urlImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Acceso_Biblioteca_Barco_clle_63.jpg/250px-Acceso_Biblioteca_Barco_clle_63.jpg',
      ubicacion: 'Cl. 73 #67 - 58, Bogotá',
    },
    {
      id: 33,
      name: 'Parque Zonal Córdoba',
      urlImg: 'https://bogota.gov.co/sites/default/files/u1011/parques1_1.jpg',
      ubicacion: 'Cl. 120 #54-61, Bogotá',
    },
    {
      id: 34,
      name: 'Parque Metropolitano Zona Franca',
      urlImg: 'http://www.idrd.gov.co/sitio/idrd/sites/default/files/imagenes/captura_de_pantalla_2017-10-12_a_las_11.09.55_a.m.png',
      ubicacion: 'Cl. 13d #106-98, Bogotá',
      InformaciónGeneral: 'Es un Parque que brinda al público en general un espacio para su recreación y sano esparcimiento para la práctica de diversos deportes como Fútbol, Tenis, Baloncesto, Voleibol Playa, Bicicross y microfútbol, entre otros.',
    },

    {
      id: 35,
      name: 'parque metropolitano timiza',
      urlImg: 'https://1.bp.blogspot.com/-90i4qEu7Q28/UwgtLjd3R3I/AAAAAAAADhQ/rNUg1sMFFSs/s1600/TIMIZA.jpg',
      ubicacion: 'Cra. 72p #40H-40sur, Bogotá',
      InformaciónGeneral: 'El parque cuenta con prados y vegetación, además de un lago que lo caracteriza de manera especial, siendo este su gran atractivo desde su origen, junto con su arborización hacen parte esencial de su moderno diseño paisajístico y arquitectónico de las instalaciones que invitan tanto a la contemplación de su panorama y a su recorrido, como a la activad física.',
    },
  ],
};
const store = createStore(reducer, initialState, composeEnhacers());

ReactDom.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>
  ,
  document.getElementById('app'),
);
