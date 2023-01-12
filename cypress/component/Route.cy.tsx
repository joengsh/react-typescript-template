import routes from '@components/templates/Routes/Routes';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

const router = createMemoryRouter(routes);

describe('Given the main application router is shown', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.mount(<RouterProvider router={router} />);
  });
  context('When I click on home tab', () => {
    beforeEach(() => {
      cy.get('[data-testid="nav-home"]').click();
    });
    it('Then I should see the app page', () => {
      cy.get('[data-testid="app"]').should('be.visible');
    });
  });
  context('When I click on page tab', () => {
    beforeEach(() => {
      cy.get('[data-testid="nav-page"]').click();
    });
    it('Then I should see the page page', () => {
      cy.get('[data-testid="page"]').should('be.visible');
    });
  });
  context('When I click on about tab', () => {
    beforeEach(() => {
      cy.get('[data-testid="nav-about"]').click();
    });
    it('Then I should see the about page', () => {
      cy.get('[data-testid="about"]').should('be.visible');
    });
  });
});
