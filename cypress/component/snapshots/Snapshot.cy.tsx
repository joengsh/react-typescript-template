import Button from '@components/atoms/Button';

describe('Given the components', { tags: '@visual' }, () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('Then <Button/> should be consistent', () => {
    cy.mount(<Button variant="primary">Button</Button>);
    cy.get('button').matchImageSnapshot();
  });
});
