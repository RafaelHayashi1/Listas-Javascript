/*
3 – Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique
qual é o maior número e exiba-o.
*/
var numeros = prompt("Digite os numeros")
var numeros = numeros.split(",")
var maior = 0
for(i=0;i<numeros.length;i++){
    if(numeros[i]>=maior){
        maior = numeros[i]
    }
}
console.log("Maior numero:"+maior)
