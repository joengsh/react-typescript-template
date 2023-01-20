import Home from '@components/pages/Home';

describe('Given the components', { tags: '@visual' }, () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('Then <Home/> should be consistent', () => {
    cy.mount(<Home />);
    cy.matchImageSnapshot();
  });
});
