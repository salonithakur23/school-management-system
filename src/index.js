import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import store from './components/Redux/store';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// import styled from '@emotion/styled';
// import "bootstrap/dist/css/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,

);


reportWebVitals();