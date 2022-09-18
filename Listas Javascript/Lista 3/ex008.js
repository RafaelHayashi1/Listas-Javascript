/*
8. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo
que calcule seu peso ideal, utilizando as seguintes fórmulas:
o Para homens: (72.7*h) - 58
o Para mulheres: (62.1*h) - 44.7
*/
function peso(alt,sex){
    let res = 0
    if(sex=='h'||sex=='H'){
        return parseInt(res = (72.7*alt)-58)
    }else{
        return parseInt( res = (62.1*alt) - 44.7)
    }
    
}
var altura = prompt("Digite sua altura")
var sexo = prompt("Digite seu sexo(H= HOMENS/F=MULHERES:")
console.log(peso(altura,sexo))