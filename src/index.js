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
  personas: [],
  lugares: [],
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
