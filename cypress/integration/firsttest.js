describe('My Test Suite', () => {
    it('Veriffying  title of page for ', () => {
    
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
    })
    it('Veriffying  title of page for PF home', () => {
    
        cy.visit('https://apps.juniper.net/home/')
        cy.title().should('eq','Pathfinder | Juniper Networks')
    })
    it('Veriffying  title of page for PF home', () => {
    
        cy.visit('https://apps.juniper.net/home/')
        cy.title().should('eq','Pathfinder | Juniper Networks')
        cy.contains('Pathfinder123')
    })


  })