describe('My First Test', () => {
    it('google launch', () => {
      cy.visit('https://www.google.com/')
      cy.title().should('eq','Google')
    })

    it('test search 2', () => {
    
      cy.xpath("//input[@name='q']").type('selenium{enter}') //{enter command}
      cy.get(".PyJv1b [role='heading']").contains("Selenium") //assertion
      //cy.get(".PyJv1b [role='heading']").should('contian','Selenium')
    })
  })