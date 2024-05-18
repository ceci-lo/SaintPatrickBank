/** Validar usuario correcto*/
let usuarios =[]; 
numero = -1;
let usuarioArray = [];
let passwordArray = [];
let idUsuarios = [];

 cargarJson();
let usuarioNombre = [];
let usuarioSaldo = [];



let boton = document.getElementsByClassName("btnLogin");
let boton2 = document.getElementById('btnLogin');
    boton2.addEventListener("load", cargarJson);
if(boton[Ñ]){
    boton2.addEventListener("click", e => {
        e.preventDefault();


        let usuario = document.querySelector(".emailInput").value;
         let password = document.querySelector(".passwordInput").value;
    
        if (usuarioRegistrado(usuario) && passwordResgistrada(password)) {
            
            
            window.location.href = "home.html";
            console.log('todo correcto')
            
        } else {
    
            let alerta = document.createElement('p');
            let padre = document.getElementsByClassName('padre');
    
            alerta.innerText = 'Usuario o Contraseña incorrecta. Ingresar nuevamente los datos';
            alerta.style.marginTop = '10px';
            alerta.classList.add("alert");
            alerta.classList.add("alert-danger");
    
            padre[0].appendChild(alerta);
        }
    
        
    });
    
}



/** Trae los usuarios del Json */

function cargarJson() {
    try{

    fetch('../tarjetas.json')
        .then(response =>{
            if(!response.ok) throw 'Error estatus: ' + response.status
            return response.json()
        })
            .then(respuesta => { //me trae los datos de json
            
                respuesta.forEach(usuario => {
                    usuarioArray.push(usuario.usuario);
                    passwordArray.push(usuario.password);
                })
                usuarios.push(respuesta);
               
            })

    }
    catch(error){console.error('Error en fetch ')}
}

/** Busca un usuario de JSON y compara con lo que puso el usuario
 * return boolean 
 * parametro usuario puesto por el usuario 
 */
let idUsuario = 0;

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

// function leer() {
 
//     let usuario = document.querySelector(".emailInput").value;
//     let password = document.querySelector(".passwordInput").value;

//     if (usuarioRegistrado(usuario) && passwordResgistrada(password)) {
        
        
//         window.location.href = "home.html";
        
//     } else {

//         let alerta = document.createElement('p');
//         let padre = document.getElementsByClassName('padre');

//         alerta.innerText = 'Usuario o Contraseña incorrecta. Ingresar nuevamente los datos';
//         alerta.style.marginTop = '10px';
//         alerta.classList.add("alert");
//         alerta.classList.add("alert-danger");

//         padre[0].appendChild(alerta);
//     }

// }



//Se Compara nombre y saldo con los datos de Usuario y contraseña
//params
//return

const mostrarDatos = () => {
    //Comienzo de for 
for(let i= 0; i < usuarios.length; i++){
    console.log(usuarios[i])
}


//se toman datos y se muestran en html
    let saldoHTML = document.getElementsByTagName('p')[1];
    let nombreHTML = document.getElementsByTagName('h1')[0];
    let tarjetaHTML = document.getElementsByTagName('p')[0];

    saldoHTML.innerText = usuarioSaldo[idUsuario];
    nombreHTML.innerHTML = usuarioNombre[idUsuario];
    tarjetaHTML.innerHTML = usuarioArray[idUsuario];   
}

console.log('llegue  a linea 131')

 

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