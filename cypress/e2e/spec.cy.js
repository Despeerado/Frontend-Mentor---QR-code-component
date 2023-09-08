describe('Home page', () => {
  it('success loads', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.url().should('include', '/index.html')
  })
})