var palindroma = prompt("Introduzca una palabra para saber si es palindroma");

var palabra = palindroma.split("");

var invertidaS = palabra.reverse();

var invertida = invertidaS.join("");

    if(palindroma==invertida){
        document.write("Es palindroma");
    }
    else{
        document.write("no es palindroma");
    }
