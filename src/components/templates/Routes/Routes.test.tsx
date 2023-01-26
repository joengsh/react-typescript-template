import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react';
import routes from './Routes';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
const router = createMemoryRouter(routes, {
  initialEntries: ['/about'],
  initialIndex: 0,
});

const Home = () => {
  return <div data-testid="home">Home</div>;
};
jest.mock('@components/pages/Home', () => {
  return Home;
});
const Page = () => {
  return <div data-testid="page">Page</div>;
};
jest.mock('@/stories/Page', () => ({
  Page: () => Page(),
}));

describe('Route', () => {
  afterAll(cleanup);

  test('First layer route should function as expected', async () => {
    render(
      <Suspense fallback={<div>loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    );
    // TODO: click app go app, click page go page, click about go about
    await waitFor(() => expect(screen.getByTestId('about')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('nav-home'));
    await waitFor(() => expect(screen.getByTestId('home')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('nav-page'));
    await waitFor(() => expect(screen.getByTestId('page')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('nav-about'));
    await waitFor(() => expect(screen.getByTestId('about')).toBeInTheDocument());
  });
});
