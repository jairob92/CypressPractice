Feature: Logear en el sistema usuarios registrados

    Validar la funcionalidad de login para los usuarios registrados en la pagina de automation practice

    Background: Ingresar a la pagina de inicio
        Given Usuario abre el navegador e ingresa la pagina de inicio

    @correct_user
    Scenario: Login exitoso

        Given usuario da clic en la opcion de SIGN IN
        When Usuario ingresa el usuario y contrasena
            | email             | password  |
            | jairo92@gmail.com | Enero2028 |
        And usuario da clic en la opcion de Submit Button
        Then El usuario ingresa exitosamente

    @incorret_user
    Scenario: Login incorrecto

        Given usuario da clic en la opcion de SIGN IN
        When Usuario ingresa el usuario y contrasena
            | email             | password  |
            | jairo92@gmail.com | Enero2022 |
        And usuario da clic en la opcion de Submit Button
        Then el usuario visualiza mensaje de error "Authentication failed."

    @user_without_password
    Scenario: Login sin password

        Given usuario da clic en la opcion de SIGN IN
        When Usuario ingresa solo el usuario
            | email             |
            | jairo92@gmail.com |
        And usuario da clic en la opcion de Submit Button
        Then el usuario visualiza mensaje de error "Password is required."

    @user_without_account
    Scenario: Login sin cuenta

        Given usuario da clic en la opcion de SIGN IN
        When Usuario no ingresa ni usuario ni contrasena
        And usuario da clic en la opcion de Submit Button
        Then el usuario visualiza mensaje de error "An email address required."