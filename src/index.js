import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/app';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  user: [
    {
      id: 1,
      name: 'Alejandro Lopez',
      urlImg: 'https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/s960x960/50801688_10156695025655617_7202425371004764160_o.jpg?_nc_cat=107&_nc_ohc=YflIxA78Wk8AQnNe5cNyFTzuZ186sPZDYn0HHYKvkUKQlqNYI13oYhFUA&_nc_ht=scontent.fbog2-2.fna&oh=b328fa4d5e6b258c74da5b66da395cf2&oe=5E7FD976',
      email: 'alejozepol@gmail.com',
      password: '123',
    },
  ],
  persona: [],
  lugar: [],
  evento: [],
  personas: [
    {
      id: 1,
      name: 'Alejandro Lopez',
      urlImg: 'https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/s960x960/50801688_10156695025655617_7202425371004764160_o.jpg?_nc_cat=107&_nc_ohc=YflIxA78Wk8AQnNe5cNyFTzuZ186sPZDYn0HHYKvkUKQlqNYI13oYhFUA&_nc_ht=scontent.fbog2-2.fna&oh=b328fa4d5e6b258c74da5b66da395cf2&oe=5E7FD976',
      email: 'alejozepol@gmail.com',
      password: '123',
      preferenciasDeportivas: ['Basketball', 'voleyball'],
      ubicacion: 'Bogotá',
      distancia: '1.5',
    },
    {
      id: 2,
      name: 'Cristian Guzman',
      urlImg: 'https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/p960x960/70143274_358565375050256_6829163756312854528_o.jpg?_nc_cat=104&_nc_ohc=moz3yR4bHw4AQmA2gmILXcfAOTCwhquIjXqN1ZgUnrALKvCHa3AloZyoQ&_nc_ht=scontent.fbog2-2.fna&oh=d58f6c6abf2101bb335cc7e6a8765cbc&oe=5E7CB99D',
      email: 'c@gmail.com',
      password: '123',
      preferenciasDeportivas: ['Basketball', 'voleyball'],
      ubicacion: 'Bogotá',
      distancia: '1.5',
    },
    {
      id: 3,
      name: 'Hugo Guzman',
      urlImg: 'data:image/jpeg;base64,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',
      email: 'c@gmail.com',
      password: '123',
      preferenciasDeportivas: ['Basketball', 'voleyball'],
      ubicacion: 'Bogotá',
      distancia: '1.5',
    },
    {
      id: 4,
      name: 'alberto Guzman',
      urlImg: 'data:image/jpeg;base64,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',
      email: 'c@gmail.com',
      password: '123',
      preferenciasDeportivas: ['Basketball', 'voleyball'],
      ubicacion: 'Bogotá',
      distancia: '1.5',
    },
    {
      id: 5,
      name: 'Mariana',
      urlImg: 'data:image/jpeg;base64,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',
      email: 'm@gmail.com',
      password: '123',
      preferenciasDeportivas: ['Basketball', 'voleyball'],
      ubicacion: 'Bogotá',
      distancia: '1.5',
    },
    {
      id: 6,
      name: 'David ',
      urlImg: 'ss',
      email: 'd@gmail.com',
      urlImg: 'data:image/jpeg;base64,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',
      preferenciasDeportivas: ['Basketball', 'voleyball'],
      ubicacion: 'Bogotá',
      distancia: '1.5',
    },
  ],
  eventos: [
    {
      id: 20,
      name: 'partido futbol 5',
      creador: 'Alejandro Lopez',
      urlImg: 'https://bogota.gov.co/sites/default/files/u1011/canchas2.jpg',
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
      urlImg: 'https://contenidos.civico.com/wp-content/uploads/2014/09/baloncesto-texto.jpg',
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
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);