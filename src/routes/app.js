import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Page from '../pages';
import Registro from '../pages/registro';
import Login from '../pages/login';
import Home from '../pages/home';

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Page} />
      <Route exact path='/registro' component={Registro} />
      <Route exact path='/login' component={Login} />
      <Layout>
        <Switch>
          <Route exact path='/home' component={Home} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
