/*
4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas são
maior de idade (18 anos) e quantas são menores.
*/
var idades = prompt("Digite as idades")
var idades = idades.split(",")
var maior = 0
var menor = 0
for(i=0;i<idades.length;i++){
    if(idades[i] >=18){
        maior++
    }else{
        menor++
    }
}
console.log("Maiores:"+maior+"Menores:"+menor)