describe('Demoblaze home page', () => {
  it('User Sign Up', () => {
    cy.visit('https://www.demoblaze.com')
    cy.contains('Sign up').click();
    cy.get('#sign-username').type('moulina');
    cy.get('#sign-password').type('12345')
    cy.get('#btn-primary').click();
  })

  it('User Login', () => {
    cy.visit('https://www.demoblaze.com')
    cy.contains

  });

})