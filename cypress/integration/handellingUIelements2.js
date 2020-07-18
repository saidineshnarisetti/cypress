describe('Handelling UI elements check boxes', function() {
    it('Veriffying  UI elements check boxes', function(){
        cy.visit('http://demo.automationtesting.in/Register.html')

        cy.url().should('include','Register')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check('Cricket','Hockey')


        
    })
    it('Veriffying  UI elements dropdownn', function(){
        cy.get('#Skills').select('Android').should('have.value','Android')
    }
    )
    it('Veriffying  UI elements Multi seleect', function(){
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Bulgarian').click()
        cy.get('.ui-corner-all').contains('Filipino').click()
    }
    )


  })