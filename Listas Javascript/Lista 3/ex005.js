/*
5. Faça um Programa que peça a temperatura em graus Celsius, transforme e
mostre em graus Farenheit.
*/
function converter(celsius){
    var faren = 0
    faren = (1.8*celsius)+32
    return parseInt(faren)
}

var celsius = prompt("Digite os graus em farenheit")
console.log(converter(celsius))