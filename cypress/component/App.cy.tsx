import App from '@/App/App';

describe('App', { tags: '@visual' }, () => {
  it('playground', () => {
    cy.viewport(1280, 720);
    cy.mount(<App />);
    cy.get('.App').should('be.visible');
  });
});
