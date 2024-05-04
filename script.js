
// Funcion del menu 

function openMenu(){
    document.querySelector("main").classList.toggle("openedMenu");
}

// Script para el Slider 

imgs = [
    "images/netflix.webp",
    "images/redes.webp",
    "images/videogames-keyboard.jpeg",
    "images/videogames.webp"
]
document.Imagenes.src = imgs[0];

contador = 0;
var intervalo = setInterval(MoverDerecha,2500);

function MoverIzquierda() {
    clearInterval(intervalo);
    contador--;
    if (contador<0){
        contador=3
    }
    document.Imagenes.src = imgs[contador]
    intervalo = setInterval(MoverDerecha,2500);
}
function MoverDerecha() {
    clearInterval(intervalo);
    contador++;
    if (contador>3){
        contador=0
    }
    document.Imagenes.src = imgs[contador]
    intervalo = setInterval(MoverDerecha,2500);
}

// Contratar ahora (Redireccion)

function redireccionar(cantidadMegas){
    window.location.href = "subpag/contratar.html?cantidadMegas=" + cantidadMegas;
}