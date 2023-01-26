import { Router } from '@remix-run/router';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MemoryRouter, Route, Routes, createMemoryRouter, RouterProvider } from 'react-router-dom';
import ErrorFallback from '.';

const Template = ({ children }: any) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);

const ErrorFC = ({ message }: any) => {
  throw new Error(message);
  return null;
};
const NormalFC = () => {
  return <div>success</div>;
};
const setupErrorTest = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <>Navigated from Start</>,
      },
      {
        path: '/test',
        // Render the component causing the navigate to '/'
        element: (
          <Template>
            <ErrorFC message="Error Message" />
          </Template>
        ),
      },
    ],
    {
      // Set for where you want to start in the routes. Remember, KISS (Keep it simple, stupid) the routes.
      initialEntries: ['/test'],
      // We don't need to explicitly set this, but it's nice to have.
      initialIndex: 0,
    }
  );

  render(<RouterProvider router={router} />);

  // Objectify the router so we can explicitly pull when calling setupMyTest
  return { router };
};

describe('Given an <ErrorBoundary /> component inside a Router', () => {
  const realError = console.error;
  beforeEach(() => {
    console.error = jest.fn();
  });
  afterEach(() => {
    console.error = realError;
  });
  describe('When the child throws an Error)', () => {
    let router: Router;
    beforeEach(() => {
      const { router: r } = setupErrorTest();
      router = r;
    });
    test('Then <ErrorFallback/> should be shown with the corresponding message', () => {
      expect(screen.getByText(/Error Message/i)).toBeInTheDocument();
    });
    describe('When I press the try again button', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByText(/Try again/i));
      });
      test('Then the error fallback should continue showing', () => {
        expect(router.state.location.pathname).toEqual('/test');
        expect(screen.getByText(/Error Message/i)).toBeInTheDocument();
      });
    });
    describe('When I press the back home button', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByText(/Back home/i));
      });
      test('Then it should redirect to "/"', async () => {
        await waitFor(() => {
          expect(router.state.location.pathname).toEqual('/');
        });
      });
    });
  });
  describe('When the child has no Error)', () => {
    test('Then the child component should have shown"', () => {
      render(
        <MemoryRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Template>
                  <NormalFC />
                </Template>
              }
            />
          </Routes>
        </MemoryRouter>
      );
      expect(screen.getByText(/success/i)).toBeInTheDocument();
    });
  });
});
