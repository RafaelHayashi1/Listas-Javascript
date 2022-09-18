/* 
1. Calcular a soma dos números de um array
*/
function somar(vetor){
    var soma = 0
    for(i=0;i<vetor.length;i++){
        soma+=vetor[i]
    }
    return soma
    
}

let vetor = [2,3,10,31,51,69,120]
console.log(`Soma do vetor:${somar(vetor)}`)
