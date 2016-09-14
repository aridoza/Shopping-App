import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import routes from './config/routes';

ReactDOM.render(
  routes,
  document.getElementById('shopping-app')
);
