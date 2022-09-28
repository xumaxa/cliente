var boton = document.getElementById("boton");

boton.onclick = function() {
    provincia= prompt("Escribe una provincia para añadirla a la lista");
    listaProvincia = document.createElement("li");
    provinciaNode=document.createTextNode(provincia);
    listaProvincia.appendChild(provinciaNode);
    document.getElementById("lista").appendChild(listaProvincia);
}

var boton2 = document.getElementById("eliminar");

boton2.onclick = function() {
    var lista = document.getElementsByTagName("li");
    var ultimaPosicion = lista.length-1;
    lista[ultimaPosicion].parentNode.removeChild(lista[ultimaPosicion]);

}
