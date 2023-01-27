import Home from '@pages/Home';

describe('Given the <Home/> component is shown', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.mount(<Home />);
  });

  it('Then display correctly', () => {
    cy.get('.Home').should('be.visible');
  });
});
