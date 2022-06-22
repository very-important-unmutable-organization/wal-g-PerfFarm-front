import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Helmet, HelmetData} from "react-helmet-async";

const helmetData = new HelmetData({});

ReactDOM.render(
  <React.StrictMode>
    <Helmet helmetData={helmetData}>
      <title>WAL-G Performance Farm</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossOrigin="anonymous" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
