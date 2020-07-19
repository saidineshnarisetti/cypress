describe('Table testcase', function() { 

    it('Table testcase', function(){
    cy.visit('http://testautomationpractice.blogspot.com/')

    cy.title().should('eq','Automation Testing Practice')

    cy.get('tbody > :nth-child(2) > :nth-child(1)').contains('Learn Selenium').should('be.visible')

    cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('Selenium').should ('be.visible')

    cy.get("table[name=BookTable]>tbody>tr td:nth-child(2)").each(($e1, index,$list) =>{
        const text=$e1.text()
        if(text.includes("Amod")){
            cy.get("table[name=Booktable]>tbody>tr td:nth-child(1)").eq(index).then(function(bname){
                const bookName= bname.text()
                expect(bookName).to.equal("Master In Java")
            })
        }
    })  
    })
})