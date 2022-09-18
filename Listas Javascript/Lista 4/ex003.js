/* 
3. Criar uma função que receba como parâmetro um array de números
e retorne um array contendo somente números positivos
*/
function positivos(vetor){
    let positivos = 'Numeros Posítivos:'
    for(i=0;i<vetor.length;i++){
       if(vetor[i]>0){
        positivos += [vetor[i]]
       }
    }
    return positivos
}
let numeros = [10,5,10,-5,-10,-50]
console.log(`${positivos(numeros)}`)
