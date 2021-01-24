import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

//Debemos importar el componente Browser Router de la libreria react-router-dom
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('.principal')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
