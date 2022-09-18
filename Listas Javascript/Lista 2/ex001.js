/*
1 – Calcule a média de diversas notas digitadas pelo usuário.
*/
var numeros = prompt("Digite Varios numeros")
numeros = numeros.split(",")
var total = 0
for(i=0;i<numeros.length;i++){
    total = parseFloat(total)+parseFloat(numeros[i])
}
console.log(total/numeros.length)