import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages';
import Personas from '../pages/Personas';
import Lugares from '../pages/Lugares';
import Perfil from '../pages/Perfil';
import Eventos from '../pages/Eventos';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/Eventos' component={Eventos} />
        <Route exact path='/Personas' component={Personas} />
        <Route exact path='/Lugares' component={Lugares} />
        <Route exact path='/Perfil' component={Perfil} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
