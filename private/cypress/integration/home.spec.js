describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Displays three hotels by default', () => {
    cy.get('[data-test="hotel-card"]').should('have.length', 3)
  })
})
