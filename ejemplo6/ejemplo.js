var palabra = prompt("Indroduzca una palabra para saber cual es la letra que más se repite");

var array1 = palabra.split("");
/*var letras = [];
var numeros=[];*/
const dict = new Dictionary();
/*for(i in array1){
    var letra = array1[i];
    for(i in letras){
        if(letra!=letras[i]){
            letras.push(letra);
            numeros.push(1);
        }
        else{
            for(i in letras[i]){
                if(letras[i]==letra){
                
                }
            }
        }
    }
    
   
}*/
for(i in array1){
    if(!(dict.has("\"" +array1[i] +"\""))){

    }
}
