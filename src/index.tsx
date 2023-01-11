import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('app-root'));

ReactDOM.createRoot(document.getElementById('app-root') as HTMLElement).render(<App />);
