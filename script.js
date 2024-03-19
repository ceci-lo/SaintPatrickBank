/** Validar email*/ 
let usuario ; 
let boton = document.getElementsByClassName("btnLogin");

boton[0].addEventListener("click", leer);
boton[0].addEventListener("click", cargarJson);


function leer  () {
    usuario = document.querySelector(".emailInput").value ;
    password = document.querySelector(".passwordInput").value;
    
    if(usuario == "1234" ){
        alert("usuario Correcto");
    }
}

function cargarJson () {
    fetch('tarjetas.json')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
       let usuario= '';
       data.forEach(function(usuario){
        usuario += '<li> ${usuario.usuario}</li>'
       });
    })
}
// https://www.youtube.com/watch?v=xqBvtvXh9Z4