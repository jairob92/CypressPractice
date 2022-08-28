class RegisterForm {

    getRegisterFormLocator(){
        return require('../Locators/RegisterForm')
    }
    VisualizarFormularioRegistro(){
        cy.get(this.getRegisterFormLocator().TITLE_FORM).should('be.visible')
        cy.wait(1000)
    }
    SelectTitle(genero){
        if(genero='Mr.')
        {
            cy.get(this.getRegisterFormLocator().RADIO_MALE).check().should('be.checked')
            cy.wait(800)
        }
        else if(genero='Mrs.')
        {
            cy.get(this.getRegisterFormLocator().RADIO_FEMALE).check().should('be.checked')
            cy.wait(800)
        }
        else{
            console.log('Genero no valido')
        }
    }
    InputName(nombre){
        cy.get(this.getRegisterFormLocator().INPUT_FIRSTNAME_CONSTUMER).should('be.visible').type(nombre)
        cy.wait(1000)
        
    }
    InputLastName(apellido){
        cy.get(this.getRegisterFormLocator().INPUT_LASTNAME_CONSTUMER).should('be.visible').type(apellido)
        cy.wait(1000)
        
    }
    InputPassword(password){
        cy.get(this.getRegisterFormLocator().INPUT_PASSWORD).should('be.visible').type(password)
        cy.wait(1000)
    }
    SelectDay(day){
        cy.get(this.getRegisterFormLocator().SELECT_DAY).select(day).should('have.value',day)
        cy.wait(800)
    }
    SelectMonth(month){
        cy.get(this.getRegisterFormLocator().SELECT_MONTH).select(month)
        cy.wait(800)    
    }
    SelectYear(year){
        cy.get(this.getRegisterFormLocator().SELECT_YEAR).select(year).should('have.value',year)
        cy.wait(800)    
    }
    CheckNewsletter(){
        cy.get(this.getRegisterFormLocator().CHECK_NEWSLETTER).check().should('be.checked')
        cy.wait(800)
    }
    CheckRecieveOffers(){
        cy.get(this.getRegisterFormLocator().CHECK_RECIVEOFFERS).check().should('be.checked')
        cy.wait(800)
    }
    InputCompanyName(companyName){
        cy.get(this.getRegisterFormLocator().INPUT_COMPANY).should('be.visible').type(companyName)
        cy.wait(800)
    }
    AddressName(name){
        cy.get(this.getRegisterFormLocator().INPUT_FIRSTNAME).should('be.visible').type(name)
    }
    AddressLastName(lastname){
        cy.get(this.getRegisterFormLocator().INPUT_SECONDNAME).should('be.visible').type(lastname)
        cy.wait(800)
    }
    InputAdress(address){
        cy.get(this.getRegisterFormLocator().INPUT_ADDRESS1).should('be.visible').type(address)
        cy.wait(800)
        
    }
    InputAddressCity(city){
        cy.get(this.getRegisterFormLocator().INPUT_CITY).should('be.visible').type(city)
        cy.wait(800)
    }
    AddressState(state){
        cy.get(this.getRegisterFormLocator().SELECT_STATE).select(state)
        cy.wait(800)
        
    }
    AddressZip(code){
        cy.get(this.getRegisterFormLocator().INPUT_ZIPCODE).should('be.visible').type(code)
        cy.wait(800)
    }
    SelectCountry(country){
        cy.get(this.getRegisterFormLocator().SELECT_COUNTRY).select(country).should('have.value','21')
        cy.wait(800)
        
    }
    AdditionalInformation(information){
        cy.get(this.getRegisterFormLocator().TEXT_AREA).should('be.visible').type(information)
        cy.wait(800)
    }
    InputHomePhone(phone){
        cy.get(this.getRegisterFormLocator().INPUT_PHONE).should('be.visible').type(phone)
        cy.wait(800)
    }
    InputMobilePhone(MobilePhone){
        cy.get(this.getRegisterFormLocator().INPUT_MOBILE_HOME).should('be.visible').type(MobilePhone)
        cy.wait(800)
    }
    InputAliasName(alias){
        cy.get(this.getRegisterFormLocator().INPUT_ALIAS_ADDRES).should('be.visible').type(alias)
        cy.wait(800)
    }
    ClickOnRegisterButton(){
        cy.get(this.getRegisterFormLocator().BUTTON_REGISTER).should('be.visible').click()
        cy.wait(800)
        
    }

}
module.exports=RegisterForm