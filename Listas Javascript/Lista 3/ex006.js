/*
6. Faça um Programa que peça 2 números inteiros e um número real. Calcule e
mostre:
o o produto do dobro do primeiro com metade do segundo .
o a soma do triplo do primeiro com o terceiro.
o o terceiro elevado ao cubo.
*/
function calculo1(inteiros,real){
    let primeiro = 0
    let segundo = 0
    let terceiro = 1
    let todos = 0
    primeiro = (inteiros[0]*2)+(inteiros[1]/2)
    segundo = inteiros[0]*3+parseFloat(real)
    for(i=1;i<=3;i++){
         terceiro*= real 
    }
    return todos = [primeiro,segundo,terceiro]
}


var num_int = prompt("Digite dois numeros inteiros:")
num_int = num_int.split(",")
var num_real = prompt("Digite um numero real:")

console.log(`o produto do dobro do primeiro com metade do segundo:${calculo1(num_int,num_real)[0]}`)
console.log(`a soma do triplo do primeiro com o terceiro:${calculo1(num_int,num_real)[1]}`)
console.log(`o terceiro elevado ao cubo:${calculo1(num_int,num_real)[2]}`)