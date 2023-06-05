describe('Demo Test Suite', () => {
  it('Verify CloudFactory Navigation', () => {
    cy.visit('https://www.cloudfactory.com/')
    cy.url().should('eq', 'https://www.cloudfactory.com/')
  })
})
