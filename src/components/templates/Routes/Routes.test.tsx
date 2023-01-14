import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react';
import routes from './Routes';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
const router = createMemoryRouter(routes);

const App = () => {
  return <div data-testid="app">App</div>;
};
jest.mock('@/App/App', () => {
  return App;
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
    render(<RouterProvider router={router} />);
    // TODO: click app go app, click page go page, click about go about
    await waitFor(() => expect(screen.getByTestId('nav-home')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('nav-home'));
    await waitFor(() => expect(screen.getByTestId('app')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('nav-page'));
    await waitFor(() => expect(screen.getByTestId('page')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('nav-about'));
    await waitFor(() => expect(screen.getByTestId('about')).toBeInTheDocument());
  });
});
