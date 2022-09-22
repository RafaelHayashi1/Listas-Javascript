/* 
3. Criar uma função que receba como parâmetro um array de números
e retorne um array contendo somente números positivos
*/
function positivos(vetor){
    let positivos = ''
    for(i=0;i<vetor.length;i++){
       if(vetor[i]>=0){
        positivos += `Numeros Posítivos:${[vetor[i]]}\n`
       }
    }
    return positivos
}
let numeros = [10,5,20,-5,-10,-50]
console.log(`${positivos(numeros)}`)
