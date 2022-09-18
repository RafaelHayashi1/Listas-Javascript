/*
9. João Papo-de-Pescador, homem de bem, comprou um microcomputador para
controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso
de peixes maior que o estabelecido pelo regulamento de pesca do estado de
São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente.
João precisa que você faça um programa que leia a variável peso (peso de
peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos
além do limite e na variável multao valor da multa que João deverá pagar.
Imprima os dados do programa com as mensagens adequadas.
*/
function multa(quilos){
    var contador = quilos
    var multa = 0
    while(contador>50){
     multa +=4
     contador--
    }
    return multa
}

function sobre(quilos){
    var excesso = quilos
    var contador = quilos
    while(contador>50){
     contador--
     excesso++
    }

    return excesso-quilos
}

var quilos = prompt("Digite quantos quilos de peixeis voce tem:")
console.log(`${multa(quilos)} reais de multa.`)
console.log(`${sobre(quilos)} kilos de sobrepeso.`)
