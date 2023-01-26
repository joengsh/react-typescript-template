import { Page } from '@/stories/Page';
import React, { Suspense } from 'react';
import { createRoutesFromElements, Route, useLocation, useNavigate } from 'react-router-dom';
import DummyLayout from '../Layout/Layout';
// const Home = React.lazy(() =>
//   import('@components/pages/Home').then((module) => {
//     throw new Error('Lazy Failed');
//     return { default: module.default };
//   })
// );

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/ui/ErrorFallback';
// import Home from '@components/pages/Home';
const Home = React.lazy(() => import('@components/pages/Home'));

const LayoutWithErrorFallback = ({ Layout }: any) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Layout />
  </ErrorBoundary>
);

const routes = createRoutesFromElements(
  <Route path="/" element={<LayoutWithErrorFallback Layout={DummyLayout} />}>
    <Route index element={<Home />} />
    <Route path="page" element={<Page />} />
    <Route path="about" element={<div data-testid="about">About</div>} />
  </Route>
);

export default routes;
