/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
require('dotenv').config();

console.log(process.env.MODE);

ReactDOM.createRoot(document.getElementById('app-root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
