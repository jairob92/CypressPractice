import { Given,And,When,Then} from 'cypress-cucumber-preprocessor/steps';
import AbrirWebPage from "../../PageObjects/AbrirWebPage"
import SignIn from "../../PageObjects/SignIn";
import MyAccount from "../../PageObjects/MyAccount"
require("cypress-xpath")
const abrirPagina=new AbrirWebPage()
const signIn=new SignIn();
const myaccount=new MyAccount()
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
Given('Usuario abre el navegador e ingresa la pagina de inicio',()=>{
    abrirPagina.openBrowser();
})
Given('usuario da clic en la opcion de SIGN IN',()=>{
    signIn.clickOnSignInButton()
})

When('Usuario ingresa el usuario y contrasena',(dataTable)=>{
    dataTable.hashes().forEach(row=>{
        signIn.IngresarCorreo(row.email)
        signIn.IngresarPassword(row.password)
    })
})
When ('Usuario no ingresa ni usuario ni contrasena',()=>{
    signIn.InputEmail()
    signIn.InputPassword()
})
When ('Usuario ingresa solo el usuario',(dataTable)=>{
    dataTable.hashes().forEach(row=>{
        signIn.IngresarCorreo(row.email)
    })
})
And('usuario da clic en la opcion de Submit Button',()=>{
    signIn.ClickonSubmitButton()
})
Then('El usuario ingresa exitosamente',()=>{
    myaccount.ValidateUrlMyaccount()
})
Then('el usuario visualiza mensaje de error {string}',(mensaje)=>{
    signIn.ValidateErrorMessage(mensaje)
})