/*
7. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo
que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
*/
function peso(alt){
    let res = 0
    return parseInt(res = (72.7*alt)-58)
}
var altura = prompt("Digite sua altura")
console.log(peso(altura))