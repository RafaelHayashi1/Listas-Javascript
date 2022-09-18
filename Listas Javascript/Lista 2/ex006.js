/*
6 – Peça ao usuário para digitar vários nomes. Exiba na tela todos os nomes
digitados, porém de maneira invertida (do último para o primeiro).
*/
var nomes = prompt("Digite varios nomes")
nomes = nomes.split(",")
nomes = nomes.reverse()

console.log(nomes)