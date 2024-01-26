//Ejecutando funciones
//Estas líneas asignan event listeners a los elementos del DOM con los ID "btn__iniciar-sesion", "btn__registrarse", y al evento "resize" de la ventana (la pantalla).
//Cuando se hace clic en el botón de iniciar sesión, se ejecutará la función iniciarSesion().
//Cuando se hace clic en el botón de registrarse, se ejecutará la función register().
//Cuando cambia el tamaño de la ventana, se ejecutará la función anchoPage().
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
//Estas líneas declaran variables y las inicializan con referencias a elementos del DOM que tienen las clases correspondientes.
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES
    //Esta función se ejecuta cuando cambia el tamaño de la ventana.
//Si el ancho de la ventana es mayor que 850 píxeles, se ajustan las propiedades de visualización de algunos elementos.
//Si es menor o igual a 850 píxeles, se ajustan las propiedades de visualización de otros elementos.

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();

//Esta función se ejecuta cuando se hace clic en el botón de iniciar sesión.
//Ajusta las propiedades de visualización de algunos elementos según el ancho de la ventana.
    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }
//Esta función se ejecuta cuando se hace clic en el botón de registrarse.
//Ajusta las propiedades de visualización de algunos elementos según el ancho de la ventana.
    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}