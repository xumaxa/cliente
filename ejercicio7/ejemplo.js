var boton = document.getElementById("boton");

boton.onclick = function() {
    parrafo = document.createElement("p");
    texto = document.createTextNode("Todo el rato lo mismo");
    parrafo.appendChild(texto);
    document.getElementById("primerDiv").appendChild(parrafo);
}
