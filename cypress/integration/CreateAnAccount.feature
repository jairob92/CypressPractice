Feature: Registrar nuevos usuarios

    Realizar pruebas a la funcionalidad de registrar usuarios en la plataforma

    Background: Ingresar a la pagina de inicio
        Given Usuario abre el navegador e ingresa la pagina de inicio

    @Create_new_user
    Scenario: Registrar nuevo usuario
        Given usuario da clic en la opcion de SIGN IN
        And visualiza la opcion CREATE AN ACCOUNT
        And registra en el campo de correo el email "jairobe1993@gmail.com" y da clic en el boton CREATE AN ACCOUNT
        When Visualiza el formulario registro
        And Selecciona el genero "Mr."
        And Ingresa el nombre "Jairo"
        And Ingresa el apellido "Bermudez"
        And Ingresa el password "Enero2028"
        And Selecciona el dia de nacimiento "17"
        And Selecciona el mes de nacimiento "December"
        And Selecciona el año de nacimiento "1992"
        And selecciona el check SIGN UP FOR OUR NEWS LATTER
        And selecciona el check RECIEVE SPECIAL OFFERS
        And Ingresa el nombre de la compañia "Compania XX"
        And Ingresa la direccion "Calle 23"
        And Ingresa el nombre de la ciudad "Big City"
        And Selecciona el estado "Florida"
        And Ingresa el codigo ZIP "25789"
        And Ingresa el pais "United States"
        And Ingresa el telefono mobil "320142547"
        And Ingresa el alias de la direccion "Casa"
        And Da click en el boton de REGISTER
        Then valido que el usuario registrado este logueado

    @Create_new_user_multiple
    Scenario Outline: Registrar varios usuarios
        Given usuario da clic en la opcion de SIGN IN
        And visualiza la opcion CREATE AN ACCOUNT
        And registra en el campo de correo el email <correo> y da clic en el boton CREATE AN ACCOUNT
        When Visualiza el formulario registro
        And Selecciona el genero <genero>
        And Ingresa el nombre <nombres>
        And Ingresa el apellido <apellidos>
        And Ingresa el password <password>
        And Selecciona el dia de nacimiento <dia>
        And Selecciona el mes de nacimiento <mes>
        And Selecciona el año de nacimiento <anho>
        And selecciona el check SIGN UP FOR OUR NEWS LATTER
        And selecciona el check RECIEVE SPECIAL OFFERS
        And Ingresa el nombre de la compañia <empresa>
        And Ingresa la direccion <direccion>
        And Ingresa el nombre de la ciudad <ciudad>
        And Selecciona el estado <estado>
        And Ingresa el codigo ZIP <codigo>
        And Ingresa el pais <pais>
        And Ingresa el telefono mobil <telefonoMobil>
        And Ingresa el alias de la direccion <alias>
        And Da click en el boton de REGISTER
        Then valido que el usuario registrado este logueado
        Examples:
            | correo             | genero | nombres | apellidos | password      | dia  | mes       | anho    | empresa | direccion  | ciudad    | estado   | codigo   | pais            | telefonoMobil | alias      |
            | "danie92@mail.com" | "Mr"   | "jack"  | "vargas"  | "prueba123*" | "20" | "January" | "1993" | " HTS"  | "calle 25" | "Calgary" | "Nevada" | "524178" | "United States" | "325417"      | "usuario1" |




