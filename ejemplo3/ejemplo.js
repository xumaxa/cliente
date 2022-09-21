var frase = prompt("escribe una frase que contenga números");

var array1= frase.split("");

var numeros = 0;
var letras="";

for(i in array1){
    if(!isNaN(array1[i])){
        var n = array1[i];
        numeros +=n;
    }else{
        letras += array1[i];
    }
}

document.write("la suma de los números es " + numeros + " y las letras totales son: " + letras);
