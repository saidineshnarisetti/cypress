describe('Handelling UI elements alerts', function() { 

    it('Veriffying Alerts', function(){
        cy.visit('http://testautomationpractice.blogspot.com/')

        cy.get('#HTML9 > .widget-content > button').click() 

        cy.on('window:confirm',str =>{
            expect(str).to.equal('Press a button!')
        }
        )
    })
})