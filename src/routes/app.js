import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page from '../pages';
import Registro from '../pages/registro';
import Login from '../pages/login';

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Page} />
      <Route exact path='/registro' component={Registro} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
