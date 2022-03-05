import React from 'react';
import { render as renderApp } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';

import Router from 'routes';

import 'styles/normalize.scss';

//------------------------------------------------------------------------------

renderApp(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
