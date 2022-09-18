/*
12. Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho
em metros quadrados da área a ser pintada. Considere que a cobertura da tinta
é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18
litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
o Informe ao usuário as quantidades de tinta a serem compradas e os
respectivos preços em 3 situações:
o comprar apenas latas de 18 litros;
o comprar apenas galões de 3,6 litros;
o misturar latas e galões, de forma que o preço seja o menor. Acrescente
10% de folga e sempre arredonde os valores para cima, isto é, considere
latas cheias.
*/
function latas(area){
    let latas = 0
    let total = 0
    let resultado = 0
    litros = area/6 
    latas = Math.ceil(litros/18) 
    total = latas*80
    return resultado = [latas,total]
}

function galoes(area){
    let total = 0
    let galoes = 0
    let resultado = 0
    let litros = area/6
    galoes = Math.ceil(litros/3.6)
    total = galoes*25
    return resultado = [galoes,total]
}

function mistura(area){
    let total = 0
    let galoes = 0
    let latas = 0
    let mistura = 0
    let teste = 0

    litros = area/6
    latas = Math.floor(litros/18)
    galoes = ((litros - (latas*18)) /3.6)
     teste = litros - (latas*18) % 3.6
    if(teste!=14.4){
        galoes++
        galoes = Math.floor(galoes)
            if(galoes==-1){
                galoes=0
            }
    }

    total = (latas*80) +Math.ceil(galoes *25)
    return mistura = [total,latas,galoes]
}


var area = prompt("Digite a area em metros quadrados:")
console.log("Apenas latas abaixo.")
console.log(`Latas Usadas:${latas(area)[0]}.`)
console.log(`Preço:${latas(area)[1]} Reais.`)
console.log("Apenas Galões abaixo.")
console.log(`Galões Usados:${galoes(area)[0]}.`)
console.log(`Preço somente de Galões:${galoes(area)[1]}.`)
console.log(`Sistema misturado abaixo.`)
console.log(`Preço:${mistura(area)[0]}`)
console.log(`Latas:${mistura(area)[1]}`)
console.log(`Galoes:${mistura(area)[2]}`)