/* 
2. Calcular a média de todos os números de um array
*/
function media(vetor){
    let soma = 0
    let res = 0
    for(i=0;i<vetor.length;i++){
        soma+=vetor[i]
    }
    return res = soma/vetor.length
}

let numeros = [10,5,10]
console.log(`Media:${media(numeros)}`)