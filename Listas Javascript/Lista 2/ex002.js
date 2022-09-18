/*
2 – Faça um programa que entre com cinco números e imprima o quadrado
de cada número.
*/
var numeros = prompt("Digite Os numeros") 
var numeros = numeros.split(",")
var quadrado= 0
for(i=0;i<numeros.length;i++){
    quadrado = numeros[i]*numeros[i]
    console.log("Resultados:"+quadrado)
}