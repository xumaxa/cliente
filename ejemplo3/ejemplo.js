var frase = prompt("Escribe una frase");
var str = frase.replace(/\s/g, '');
var array1 = str.split("");

var numeros = 0;
var total = 0;

var letras = 0;

for (i in array1) {
    if (!isNaN(array1[i])) {
        var n = parseInt(array1[i]);
        total = parseInt(total + n);
        numeros++;
    } else {
        letras++;
    }
}

document.write("hay un total de " + numeros + " numeros que suman un total de " + total + " y hay un total de " + letras + " letras")
