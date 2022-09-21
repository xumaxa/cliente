var numero = prompt("introduce un numero del 1 - 100 para intenar adivinar");

var aleatorio = Math.floor(Math.random() * 100);

while(numero!=aleatorio){
    if(numero<aleatorio){
        numero = prompt("Indroduzca un número mayor, te has quedado corto");
    }else{
        numero= prompt("Introduzca un número menor, te has pasado");
    }
}

document.write("Has acertado el número!!!");
