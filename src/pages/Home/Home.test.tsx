import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Given the <Home/> component', () => {
  let container: HTMLElement;
  beforeEach(() => {
    const { container: _container } = render(<Home />);
    container = _container;
  });
  test('Then the component should render properly.', () => {
    expect(screen.queryByTestId('home')).toBeInTheDocument();
  });

  test('And the component should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
