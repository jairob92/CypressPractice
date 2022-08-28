import { Given,And,When,Then} from 'cypress-cucumber-preprocessor/steps';
import AbrirWebPage from "../../PageObjects/AbrirWebPage"
import SignIn from "../../PageObjects/SignIn";
import RegisterForm from "../../PageObjects/RegisterForm";
import MyAccount from "../../PageObjects/MyAccount"
require("cypress-xpath")
const abrirPagina=new AbrirWebPage()
const signIn=new SignIn();
const registrform =new RegisterForm()
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
And('visualiza la opcion CREATE AN ACCOUNT',()=>{
    signIn.VisualizarCreateAnAccount()
})
And('registra en el campo de correo el email {string} y da clic en el boton CREATE AN ACCOUNT',(correo)=>{
    signIn.IngresarCorreoInicial(correo)
})
When('Visualiza el formulario registro',()=>{
    registrform.VisualizarFormularioRegistro()
})
And('Selecciona el genero {string}',(genero)=>{
    registrform.SelectTitle(genero)
})
And('Ingresa el nombre {string}',(nombre)=>{
    registrform.InputName(nombre)
})
And('Ingresa el apellido {string}',(apellido)=>{
    registrform.InputLastName(apellido)
})
And('Ingresa el password {string}',(password)=>{
    registrform.InputPassword(password)
})
And('Selecciona el dia de nacimiento {string}',(day)=>{
    registrform.SelectDay(day)
})
And('Selecciona el mes de nacimiento {string}',(month)=>{
    registrform.SelectMonth(month)
})
And('Selecciona el año de nacimiento {string}',(year)=>{
    registrform.SelectYear(year)
})
And('selecciona el check SIGN UP FOR OUR NEWS LATTER',()=>{
    registrform.CheckNewsletter()
})
And('selecciona el check RECIEVE SPECIAL OFFERS',()=>{
    registrform.CheckRecieveOffers()
})
And('Ingresa el nombre de la compañia {string}',(companyName)=>{
    registrform.InputCompanyName(companyName)
})
And('Ingresa la direccion {string}',(address)=>{
    registrform.InputAdress(address)
})
And('Ingresa el nombre de la ciudad {string}',(city)=>{
    registrform.InputAddressCity(city)
})
And('Selecciona el estado {string}',(state)=>{
    registrform.AddressState(state)
})
And('Ingresa el codigo ZIP {string}',(zipCode)=>{
    registrform.AddressZip(zipCode)
})
And('Ingresa el pais {string}',(country)=>{
    registrform.SelectCountry(country)
})
And('Ingresa el pais {string}',(country)=>{
    registrform.SelectCountry(country)
})
And ('Ingresa el telefono mobil {string}',(mobilPhone)=>{
    registrform.InputMobilePhone(mobilPhone)
})
And ('Ingresa el alias de la direccion {string}',(alias)=>{
    registrform.InputAliasName(alias)
})
And ('Da click en el boton de REGISTER',()=>{
    registrform.ClickOnRegisterButton()
})
Then ('valido que el usuario registrado este logueado',()=>{
    myaccount.UserRegistredMessage()
})








