import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages';
import Personas from '../pages/Personas';
import Lugares from '../pages/Lugares';
import Perfil from '../pages/Perfil';
import Eventos from '../pages/Eventos';
import NuevoEventos from '../pages/NuevoEvento';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/eventos' component={NuevoEventos} />
        <Route exact path='/personas' component={Personas} />
        <Route exact path='/lugares' component={Lugares} />
        <Route exact path='/perfil' component={Perfil} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
