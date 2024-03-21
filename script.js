/** Validar usuario correcto*/ 
let usuario ; 
let usuarioArray = [];
let passwordArray = [];

let boton = document.getElementsByClassName("btnLogin");

boton[0].addEventListener("click", leer);
boton[0].addEventListener("click", cargarJson);

/** Trae los usuarios del Json */


function cargarJson () {
    fetch('tarjetas.json')
    .then(function(respuesta){ // me conecta con el json
        return respuesta.json();
    })
    .then(function(data){ //me trae los datos de json
      
       data.forEach(function(usuario){
        usuarioArray.push(usuario.usuario); 
        passwordArray.push(usuario.password);
       });
    })
  
}

function leer  () {
    usuario = document.querySelector(".emailInput").value ;
    password = document.querySelector(".passwordInput").value;
    
    if(usuarioRegistrado(usuario)){
        //Aca deberia poner el link a otra seccion permitiendo ingresar al sitio si es true
        // pedir los datos de nuevo si es false
        alert('El usuario es correcto')
    }else {
        alert('ingrese los datos nuevamente');
    }
}



/** Busca un usuario de JSON y compara con lo que puso el usuario
 * return boolean 
 * parametro usuario puesto por el usuario 
 */
function  usuarioRegistrado(usuario){
    let usuarioEncontrado = false;

    for (let i = 0; i < usuarioArray.length; i++) {
        if(usuario == usuarioArray[i]){
        usuarioEncontrado = true;
        }
    }

    return usuarioEncontrado;
}


// https://www.youtube.com/watch?v=xqBvtvXh9Z4