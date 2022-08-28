class SignIn {
  getHomeLocators() {
    return require("../Locators/HomePage");
  }
  getSignInLocator() {
    return require("../Locators/SignIn");
  }

  clickOnSignInButton() {
    cy.get(this.getHomeLocators().BUTTON_LOGIN).should("be.visible").click();
    cy.wait(1000);
  }
  IngresarCorreoInicial(email) {
    cy.get(this.getSignInLocator().H1_AUTHENTICATION).should("be.visible");
    cy.wait(1000);
    cy.get(this.getSignInLocator().INPUT_EMAIL)
      .should("be.visible")
      .type(email);
    cy.wait(1000);
    cy.get(this.getSignInLocator().BUTTON_CREATEANACCOUNT)
      .should("be.visible")
      .click();
    cy.wait(2000);
  }
  VisualizarCreateAnAccount() {
    cy.get(this.getSignInLocator().H1_LOGIN).should("be.visible");
    cy.wait(1000);
  }

  LogearUsuario(email, password) {
    cy.get(this.getSignInLocator().LOGIN_EMAIL)
      .should("be.visible")
      .type(email);
    cy.wait(1000);
    cy.get(this.getSignInLocator().LOGIN_PASSWORD)
      .should("be.visible")
      .type(password);
    cy.wait(1000);
    cy.get(this.getSignInLocator().LOGIN_BUTTON).should("be.visible").click();
    cy.wait(1000);
  }
  IngresarCorreo(email) {
    cy.get(this.getSignInLocator().LOGIN_EMAIL)
      .should("be.visible")
      .type(email);
  }
  IngresarPassword(password) {
    cy.get(this.getSignInLocator().LOGIN_PASSWORD)
      .should("be.visible")
      .type(password);
  }
  InputEmail() {
    cy.get(this.getSignInLocator().LOGIN_EMAIL).should("be.visible");
  }
  InputPassword() {
    cy.get(this.getSignInLocator().LOGIN_PASSWORD).should("be.visible");
  }

  ClickOnForgetPassword() {
    cy.get(this.getSignInLocator().LINK_FORGOT_PASSWORD)
      .should("be.visible")
      .click();
    cy.wait(1000);
  }
  ValidateErrorMessage(mensaje) {
    cy.get(this.getSignInLocator().ERROR_LOGIN).then((element) => {
      let texto = element.text();
      if (texto == mensaje) {
        cy.get(this.getSignInLocator().ERROR_LOGIN).should(
          "have.text",
          mensaje
        );
        cy.log(texto);
      }
      //cy.log(texto)
    });
  }
  ClickonSubmitButton() {
    cy.get(this.getSignInLocator().LOGIN_BUTTON).should("be.visible").click();
  }
}
module.exports = SignIn;
