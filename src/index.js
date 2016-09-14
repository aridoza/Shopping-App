import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './containers/App';
import routes from './config/routes';

render(
  routes,
  document.getElementById('shopping-app')
);
