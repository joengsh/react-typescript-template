import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tw-elements';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '@components/templates/Routes/Routes';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('app-root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
