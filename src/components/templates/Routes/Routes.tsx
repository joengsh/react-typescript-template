import { Page } from '@/stories/Page';
import React, { Suspense } from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';
import DummyLayout from '../Layout/Layout';
// import App from '@/App/App';
const App = React.lazy(() => import('@/App/App'));
// const App = React.lazy(() => import('@/App/App').then((module) => ({ default: module.default })));

const SuspenseLayout = () => (
  <Suspense fallback={<div>Suspense Loading...</div>}>
    <DummyLayout />
  </Suspense>
);

const routes = createRoutesFromElements(
  <Route path="/" element={<SuspenseLayout />}>
    <Route index element={<App />} />
    <Route path="page" element={<Page />} />
    <Route path="about" element={<div data-testid="about">About</div>} />
  </Route>
);

export default routes;
