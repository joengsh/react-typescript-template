import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import routes from './Routes';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

const router = createMemoryRouter(routes);

describe('Route', () => {
  test('First layer route should function as expected', async () => {
    render(<RouterProvider router={router} />);
    fireEvent.click(screen.getByTestId('nav-home'));
    // TODO: click app go app, click page go page, click about go about
    fireEvent(
      screen.getByTestId('nav-home'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitFor(() => expect(screen.getByTestId('app')).toBeInTheDocument());

    fireEvent(
      screen.getByTestId('nav-page'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitFor(() => expect(screen.getByTestId('page')).toBeInTheDocument());
    fireEvent(
      screen.getByTestId('nav-about'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitFor(() => expect(screen.getByTestId('about')).toBeInTheDocument());
  });
});
