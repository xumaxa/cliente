palabra= prompt("escribe una palabra");
var arr= palabra.split("");
letra = prompt("escribe una letra");
var contador=0;

for(i in arr){
    if(arr[i]==letra){
        contador++;
    }
}

document.write(contador);
