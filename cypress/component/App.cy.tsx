import App from '@/App/App';

describe('Given the <App/> component is shown', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.mount(<App />);
  });

  it('Then display correctly', () => {
    cy.get('.App').should('be.visible');
  });

  it('Then the display should be consistent every time it render', { tags: '@visual' }, () => {
    cy.matchImageSnapshot();
  });
});
