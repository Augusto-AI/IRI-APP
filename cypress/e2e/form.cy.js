describe('Testing form', () => {
  const iriEmail = 'iri@example.com'
  const iriPassword = 'password123'

  const studentName = 'Student'
  const hoursMet = '5'
  const progressDescription = 'Good progress this week.'

  beforeEach(() => {
    cy.visit('/')
  })

  // Other existing tests...

  it('validate IRI email and password against AirTable 1', () => {
    // Assuming you have input fields for IRI email and password
    cy.get('#iri-email').type(iriEmail)
    cy.get('#iri-password').type(iriPassword)
    cy.get('[type="submit"]').click()

    // Add assertions based on the response from AirTable 1
    // For example, check if a Thank You screen is displayed if credentials are valid
    cy.contains('Thank You').should('be.visible')
  })

  it('enter student information into AirTable 2', () => {
    // Assuming you have input fields for student name, hours met, and progress description
    cy.get('#student-name').type(studentName)
    cy.get('#hours-met').type(hoursMet)
    cy.get('#progress-description').type(progressDescription)
    cy.get('[type="submit"]').click()

    // Add assertions based on the response from AirTable 2
    // For example, check if a Thank You screen is displayed after submitting student information
    cy.contains('Thank You').should('be.visible')
  })
})
