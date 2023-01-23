import Footer from '@components/organisms/Footer/Footer';

describe('Given the components', { tags: '@visual' }, () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('Then <Footer/> should be consistent', () => {
    cy.mount(<Footer />);
    cy.matchImageSnapshot();
  });
});
