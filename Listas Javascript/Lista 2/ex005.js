/*
5 – Crie um programa que entre com os dados de altura e sexo de 5 pessoas.
Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas
são do sexo feminino. Mostre também qual é a maior altura e se essa altura
é de um homem ou uma mulher.
*/
var sexo = prompt("Digite seu sexo(M = Masculino F= feminino):")
var sexo = sexo.split(",")
var altura = prompt("Digite sua altura:")
var altura = altura.split(",")
var masculino = 0
var feminino = 0
var maioral = altura[0]
var maiorsexo = 0
for(i=0;i<sexo.length;i++){
    if(sexo[i]=="M"){
        masculino++
    }else{
        feminino++
    }

    if(altura[i]>maioral){
        maioral = altura[i]
        maiorsexo = sexo[i]
    }
}
console.log(`Homens:${masculino} Mulheres:${feminino} Maior Altura:${maioral} do sexo ${maiorsexo}`)