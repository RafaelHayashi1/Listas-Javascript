/*
7 – Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês
e o ano.
*/
var datas = prompt("Digite uma data ex:20/10/2002")
var datas = datas.split("/")
console.log(`Dia:${datas[0]} Mes:${datas[1]} Ano:${datas[2]}`)