var ampliar = document.getElementById("ampliar");
ancho = 400;
ampliar.onclick = function() {
    ancho = ancho +20;
    img= document.getElementById("imagen");
    img.width =ancho;
}

var reducir = document.getElementById("reducir");

reducir.onclick = function() {
    ancho = ancho -20;
    img= document.getElementById("imagen");
    img.width =ancho;
}
