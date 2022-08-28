class AbrirWebPage{
    openBrowser(){
        cy.visit('http://automationpractice.com/index.php',)
        cy.title('eq','My Store')
        cy.wait(1000)
    }
}
module.exports =AbrirWebPage