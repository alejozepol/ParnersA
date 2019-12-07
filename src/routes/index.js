import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages';
import Personas from '../pages/Personas';
import Persona from '../pages/Persona';
import Lugares from '../pages/Lugares';
import Perfil from '../pages/Perfil';
import NuevoEventos from '../pages/NuevoEvento';
import Evento from '../pages/Evento';
import Auth from '../pages/auth';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/eventos' component={NuevoEventos} />
        <Route exact path='/evento/:id' component={Evento} />
        <Route exact path='/personas' component={Personas} />
        <Route exact path='/persona/:id' component={Persona} />
        <Route exact path='/lugares' component={Lugares} />
        <Route exact path='/lugare/:id' component={Lugares} />
        <Route exact path='/perfil' component={Perfil} />
        <Route exact path='/auth' component={Auth} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
