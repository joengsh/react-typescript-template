import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should match snapshot', async () => {
    const { container } = render(<App />);
    await waitFor(() => expect(screen.getByTestId('nav-home')).toBeInTheDocument());
    expect(container).toMatchSnapshot();
  });
});
