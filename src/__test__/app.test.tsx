import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />);
    const heading = screen.getByText(/Hello there/i);
    expect(heading).toBeInTheDocument();
  });
});
