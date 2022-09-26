var palabra = prompt("Indroduzca una palabra para saber cual es la letra que más se repite");

var array1 = palabra.split("");

const dict = new Dictionary();

for (i in array1) {
    if (!(dict.has(array1[i]))) {
        dict.set(array1[i], 1);
    } else {
        var valor = dict.get(array1[i]);
        dict.set((array1[i]), valor + 1);
    }
}
var valores = dict.values();
var indicekey = 0;
var vm = 0;
var keys = dict.keys();
for (i in valores) {
    if (valores[i] > vm) {
        vm = valores[i];
        indicekey = i;
    }
}

var keymaxima = keys[indicekey];

document.write("La letra que mas se repite es " + keymaxima + " un número total de " + vm);
