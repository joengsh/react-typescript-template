import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '@components/templates/Routes/Routes';

const router = createBrowserRouter(routes);

function App() {
  console.log(process.env.CYPRESS_BASE_URL);
  return (
    <Suspense fallback={<div>Suspense Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
