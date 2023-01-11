import { Page } from '@/stories/Page';
import App from '@/App/App';
import React from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';
import DummyLayout from '../Layout/Layout';

const routes = createRoutesFromElements(
  <Route path="/" element={<DummyLayout />}>
    <Route index element={<App />} />
    <Route path="page" element={<Page />} />
    <Route path="about" element={<div data-testid="about">About</div>} />
  </Route>
);

export default routes;
