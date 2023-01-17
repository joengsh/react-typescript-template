/* eslint-disable jest/valid-describe-callback */
describe('Given I visit the main page', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });
  context('When I click on home tab', { tags: ['@smoke'] }, () => {
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
