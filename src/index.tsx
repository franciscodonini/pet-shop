import * as serviceWorker from './serviceWorker';
import Columns from './components/columns/columns';
import Card from './components/cards/card';
import Menu from './components/menu/menu';
import Logo from './components/logo/logo';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Columns />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
