/** Validar usuario correcto*/
let usuario;
let usuarioArray = [];
let passwordArray = [];

let boton = document.getElementsByClassName("btnLogin");


boton[0].addEventListener("click", cargarJson);
cargarJson();
boton[0].addEventListener("click", leer);
/** Trae los usuarios del Json */


function cargarJson() {
    fetch('../tarjetas.json')
        .then(function (respuesta) { // me conecta con el json
            return respuesta.json();
        })
        .then(function (data) { //me trae los datos de json

            data.forEach(function (usuario) {
                usuarioArray.push(usuario.usuario);
                passwordArray.push(usuario.password);
            })      
           
        })

}

/** Busca un usuario de JSON y compara con lo que puso el usuario
 * return boolean 
 * parametro usuario puesto por el usuario 
 */
function usuarioRegistrado(usuario) {
    let usuarioEncontrado = false;

    for (let i = 0; i < usuarioArray.length; i++) {
        if (usuario == usuarioArray[i]) {
            usuarioEncontrado = true;
        }
    }

    return usuarioEncontrado;
}

/** Busca la conseña del JSON y la compara con la que puso el usuario
 * parametro password que pone el usuario
 * retorna booleano 
 */
const passwordResgistrada = (password) => {
    let passwordEncontrada = false;

    for (let i = 0; i < passwordArray.length; i++) {
        if (password == passwordArray[i]) {
            passwordEncontrada = true;
        }
    }
    return passwordEncontrada;
}



function leer() {
    usuario = document.querySelector(".emailInput").value;
    password = document.querySelector(".passwordInput").value;

    if (usuarioRegistrado(usuario) && passwordResgistrada(password)) {
        
            window.location.href = "home.html";
    } else {
       
        let alerta = document.createElement('p');
        let padre = document.getElementsByClassName('padre');
        
        alerta.innerText = 'Usuario o Contraseña incorrecta. Ingresar nuevamente los datos';
        alerta.style.marginTop = '10px';
        alerta.classList.add("alert");
        alerta.classList.add("alert-danger");

        padre[0].appendChild(alerta);        
    }
}

// https://www.youtube.com/watch?v=xqBvtvXh9Z4