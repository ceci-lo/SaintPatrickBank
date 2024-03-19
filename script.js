/** Validar email*/ 
let usuario ; 
let boton = document.getElementsByClassName("btnLogin");

boton[0].addEventListener("click", leer);

function leer  () {
    usuario = document.querySelector(".emailInput").value ;
    password = document.querySelector(".passwordInput").value;
    
    if(usuario == "1234" ){
        alert("usuario Correcto");
    }
}

