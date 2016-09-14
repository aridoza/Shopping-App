import React from 'react';
import { ReactDOM, render } from 'react-dom';
import App from './components/App';
import routes from './config/routes';

ReactDOM.render(
  routes,
  document.getElementById('shopping-app')
);
