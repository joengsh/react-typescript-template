import Home from '@components/pages/Home';

describe('Given the <Home/> component is shown', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.mount(<Home />);
  });

  it('Then display correctly', () => {
    cy.get('.Home').should('be.visible');
  });

  it('Then the display should be consistent every time it render', { tags: '@visual' }, () => {
    cy.matchImageSnapshot();
  });
});
