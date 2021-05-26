import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import { BrowserRouter } from 'react-router-dom';
import Routerapp from './Router/Router';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routerapp />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


