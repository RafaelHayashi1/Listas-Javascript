/*
4. Faça um Programa que peça a temperatura em graus Farenheit, transforme e
mostre a temperatura em graus Celsius.
o C = (5 * (F-32) / 9).
*/
function converter(faren){
    var gcelsius = 0
    gcelsius = (5*(faren-32)/9)
    return parseInt(gcelsius)
}

console.log(converter(120))