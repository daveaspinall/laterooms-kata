describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('[data-test="hotel-card"]').as('hotels')
  })

  it('Displays three hotels by default', () => {
    cy.get('@hotels').should('have.length', 3)
  })

  it('Allows a user to filter hotels by a single facility', () => {
    cy.get('label[for="car-park-filter"]').click()
    cy.get('@hotels').should('have.length', 2)
  })

  it('Allows a user to filter hotels by multiple facilities', () => {
    cy.get('label[for="car-park-filter"]').click()
    cy.get('label[for="gym-filter"]').click()
    cy.get('@hotels').should('have.length', 1)
  })
})
