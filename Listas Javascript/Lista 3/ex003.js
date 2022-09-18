/*
3. Faça um Programa que pergunte quanto você ganha por hora e o número de
horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido
mês.
*/
function salario(ganho_h,trabalho_m){
    var total = 0
    return total = ganho_h*trabalho_m
}



var dinheiro_hora = prompt("Digite quanto voce ganha por hora:")
var horas_trab = prompt("Digite quantas horas voce trabalhou esse mes")

console.log(salario(dinheiro_hora,horas_trab))