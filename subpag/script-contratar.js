
// Verifica si hay parametros en la URL

var urlParametros = new URLSearchParams(window.location.search);
var cantidadMegas = urlParametros.get("cantidadMegas");

// Si hay una cantidad de megas cambia el texto

if (cantidadMegas){
    var textoMB = document.getElementById("mb-cantidad");
    textoMB.innerHTML = cantidadMegas + "MB";
}