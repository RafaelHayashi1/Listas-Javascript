/*
13. Faça um programa que peça o tamanho de um arquivo para download (em MB)
e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo
aproximado de download do arquivo usando este link (em minutos).
*/
function converter(arquivo,velocidade){
    var tempo = (arquivo*8/velocidade) /60
    tempo = Math.ceil(tempo)
  return tempo
}

var mb = prompt("Digite o tamanho do arquivo em MB:")
var internet = prompt("Digite a velocidade da internet(em Mbps):")
console.log(`Tempo de download:${converter(mb,internet)} minutos`)