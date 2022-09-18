/*
11. Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho
em metros quadrados da área a ser pintada. Considere que a cobertura da tinta
é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18
litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta
a serem compradas e o preço total.
*/
function latas(area){
    let latas = 0
    let total = 0
    let todos = 0
    let litros = area/3 //conseguimos os litros divindo a area por
    latas = Math.ceil(litros/18) //ceil é usado para aredondar o numero para cima pois só tem latas de 18 litros
    total = latas*80
    return todos = [latas,total]
}


var area = prompt("Digite a area em metros quadrados:")
console.log(`Latas Usadas:${latas(area)[0]}.`)
console.log(`Preço:${(latas(area))[1]} Reais.`)
