/// <reference types="Cypress" />
require('cypress-xpath')
describe('Abrir pagina de siendo seguro',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it('VisitHomePage', () =>{
        cy.visit('http://automationpractice.com/index.php')
        cy.title('eq','My Store')
        cy.wait(2000)
        
    })
    
})