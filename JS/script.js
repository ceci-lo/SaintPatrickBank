/** Validar usuario correcto*/
let usuario, numero = -1;
let usuarioArray = [];
let passwordArray = [];
let idUsuario = [];

 cargarJson();
let usuarioNombre = [];
let usuarioSaldo = [];


let boton = document.getElementsByClassName("btnLogin");

if(boton == true){
    boton[0].addEventListener("click", cargarJson);
    cargarJson();
    boton[0].addEventListener("click", leer);
//boton[0].addEventListener("onchange", mostrarDatos);

}


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
                usuarioNombre.push(usuario.nombre);
                usuarioSaldo.push(usuario.saldo);
                idUsuario.push(usuario.id);     
               
            })      
           
        })

}

/** Busca un usuario de JSON y compara con lo que puso el usuario
 * return boolean 
 * parametro usuario puesto por el usuario 
 */

function usuarioRegistrado(usuario) {
    let usuarioEncontrado = false;

    for (let i = 0 ; i < usuarioArray.length; i++) {
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
let id 

function leer() {
 
    usuario = document.querySelector(".emailInput").value;
    let password = document.querySelector(".passwordInput").value;

    if (usuarioRegistrado(usuario) && passwordResgistrada(password)) {
        id = usuarioArray.indexOf(usuario);
        
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



//Se Compara nombre y saldo con los datos de Usuario y contraseña
//params
//return

const mostrarDatos = (numeroIndex) => {
    let saldo = 0;
    let nombre = document.getElementsByTagName('h1')[0];
    let tarjeta = document.getElementsByTagName('h5')[0];

        nombre = usuarioNombre[numeroIndex];
        console.log(usuarioNombre[numeroIndex])
        saldo = usuarioSaldo[numeroIndex];
   let saludo =  document.getElementById("saludo");
   saludo.innerText = `!Hola, ${nombre}¡`;
}


console.log('nombre ', usuarioNombre)
nombre.innerText = usuarioNombre[0];
tarjeta.innerText = usuarioArray[0];



// let div = document.getElementsByTagName('div')[8];

//     const dns = new XMLHttpRequest();
//     dns.open('GET', 'tarjetas.json',true);
//     dns.send();
// console.log('dns ',dns)
//     if(dns.status === 200){
//         //perfect
//         let respuesta  = dns.response 
//         console.log(respuesta);
//         div.innerHTML = respuesta;
//     }
   
// https://www.youtube.com/watch?v=xqBvtvXh9Z4