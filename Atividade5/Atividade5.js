var primeiro = prompt("Insira o primeiro número");
var segundo = prompt("Insira o segundo número");
var terceiro = prompt("Insira o terceiro número");


function verificaMaior(primeiro, segundo, terceiro){
    return Math.max(primeiro, segundo, terceiro);
}

alert(verificaMaior(primeiro, segundo, terceiro));