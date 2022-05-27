import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Header} from './App';

ReactDOM.render(
  <React.StrictMode>
      <Header></Header>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
