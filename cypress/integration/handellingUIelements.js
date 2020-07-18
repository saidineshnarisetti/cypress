describe('Handelling UI elements in UI', function() {
    it('Veriffying  UI elements Input box and radiobutton', function(){
        cy.visit('http://demo.guru99.com/test/newtours/')
        cy.url().should('include','newtours')

        cy.get(':nth-child(2) > [width="112"] > input').type("mercuty")
        cy.get(':nth-child(3) > [width="112"] > input').type("mercuty")
        cy.get('input[name=submit]').should('be.visible').click()
        cy.title().should('eq','Login: Mercury Tours')
        cy.get(':nth-child(2) > [width="80"] > a').click()

        cy.get('[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('[value="oneway"]').should('be.visible').should('not.be.checked').click()
        cy.get('td > input').click()
        cy.title().should('eq','Find a Flight: Mercury Tours:')
    })
    


  })