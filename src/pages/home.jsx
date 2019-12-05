import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPersonas } from '../action';
import { getAll } from '../services/db/crud';
import firebase from '../services/firebaseConfig';
import ContainerCard from '../components/containercard';
import CardImg from '../components/atomos/cardImg';
import Card from '../components/atomos/card';

const Home = (props) => {

  const { personas, eventos, lugares, user, getPersonas } = props;

  const getDBPersonas = () => {
    firebase.firestore()
      .collection('usuar')
      .get()
      .then((data) => {
        data.forEach((doc) => getPersonas(doc.data()))
      })
      .catch((error) => (
        { state: false, menssage: error }
      ));
  }

  getDBPersonas();
  console.log(personas)

  return (
    <section className='Home'>
      <ContainerCard title='Personas'>

        {personas.map((p) => (
          <Link to={`persona/${p.id}`}>
            <Card user={p} />
          </Link>
        ))}
      </ContainerCard>
      <ContainerCard title='Eventos'>
        {eventos.map((ev) => (
          <Link to={`evento/${ev.id}`}>
            <CardImg
              key={ev.id}
              name={ev.name}
              img={ev.urlImg}
              deporte='futbol'
            />
          </Link>
        ))}
      </ContainerCard>
      <ContainerCard title='Lugares'>
        {lugares.map((l) => (
          <Link to={`lugar/${l.id}`}>
            <CardImg
              name={l.name}
              img={l.urlImg}
            />
          </Link>
        ))}

      </ContainerCard>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    personas: state.personas,
    eventos: state.eventos,
    lugares: state.lugares,
    user: state.user,
  };
};

const mapDispatchToProps = {
  getPersonas,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
