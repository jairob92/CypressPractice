class MyAccount{
    getMyAccountLocator(){
        return require('../Locators/MyAccount')
    }

    UserRegistredMessage(){
     cy.get(this.getMyAccountLocator().INFO_ACCOUNT).should('eq','Welcome to your account. Here you can manage all of your personal information and orders.')
    }
    ValidateUrlMyaccount(){
        cy.url().should('contain','controller=my-account')
    }

    


}
module.exports=MyAccount