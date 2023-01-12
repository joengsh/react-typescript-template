import routes from '@components/templates/Routes/Routes';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

const router = createMemoryRouter(routes);

describe('Route', () => {
  it('playground', () => {
    cy.viewport(1280, 720);
    cy.mount(<RouterProvider router={router} />);
    cy.get('[data-testid="nav-home"]').click();
    cy.get('[data-testid="app"]').should('be.visible');
    cy.get('[data-testid="nav-page"]').click();
    cy.get('[data-testid="page"]').should('be.visible');
    cy.get('[data-testid="nav-about"]').click();
    cy.get('[data-testid="about"]').should('be.visible');
  });
});
