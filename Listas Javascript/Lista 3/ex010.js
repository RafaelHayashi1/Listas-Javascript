/*
10. Faça um Programa que pergunte quanto você ganha por hora e o número de
horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido
mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o
INSS e 5% para o sindicato, faça um programa que nos dê:
o salário bruto.
o quanto pagou ao INSS.
o quanto pagou ao sindicato.
o o salário líquido.
o calcule os descontos e o salário líquido, conforme a tabela abaixo:
o + Salário Bruto : R$
o - IR (11%) : R$
o - INSS (8%) : R$
o - Sindicato ( 5%) : R$
= Salário Liquido : R$
*/
function salario(ganho_h,trabalho_m){
    let total = 0
    let ir = 0
    let inss= 0
    let sindicato = 0
    let desconto = 0
    let liquido = 0
    let todos = 0
    total = ganho_h*trabalho_m
    ir = total*0.11
    inss = total*0.08
    sindicato = total*0.05
    desconto = parseFloat(ir)+parseFloat(inss)+parseFloat(sindicato)
    liquido = total-desconto
    return todos = [total,ir,inss,sindicato,liquido]
}


var dinheiro_hora = prompt("Digite quanto voce ganha por hora:")
var horas_trab = prompt("Digite quantas horas voce trabalhou esse mes")

console.log(`Salario Bruto:${salario(dinheiro_hora,horas_trab)[0]}`)
console.log(`Desconto IR(11%):${salario(dinheiro_hora,horas_trab)[1]}`)
console.log(`Desconto INSS(8%):${salario(dinheiro_hora,horas_trab)[2]}`)
console.log(`Desconto Sindicato(5%):${salario(dinheiro_hora,horas_trab)[3]}`)
console.log(`Salario Liquido:${salario(dinheiro_hora,horas_trab)[4]}`)