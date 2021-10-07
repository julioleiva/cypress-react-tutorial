describe('Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('it focuses the input', () => {
    cy.focused().should('have.class', 'form-control');
  });

  it('accepts input', () => {
    const input = 'Learn about Cypress';
    cy.get('.form-control').type(input).should('have.value', input);
  });

  it('displays list of todo', () => {
    cy.get('li').should('have.length', 2);
  });

  it('adds a new todo', () => {
    const input = 'Learn about cypress';
    cy.get('.form-control')
      .type(input)
      .type('{enter}')
      .get('li')
      .should('have.length', 3);
  });

  it('deletes a todo', () => {
    cy.get('li')
      .first()
      .find('.btn-danger')
      .click()
      .get('li')
      .should('have.length', 1);
  });

  /* describe('Request', () => {
    it('fetch 10 random users from API', () => {
      cy.request('https://jsonplaceholder.typicode.com/users').should(
        (response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length(10);
          expect(response).to.have.property('headers');
          expect(response).to.have.property('duration');
        }
      );
    });
  }); */
});
