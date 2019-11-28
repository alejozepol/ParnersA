import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page from '../pages';
import Registro from '../pages/registro';

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Page} />
      <Route exact path='/registro' component={Registro} />
    </Switch>
  </BrowserRouter>
);

export default App;
