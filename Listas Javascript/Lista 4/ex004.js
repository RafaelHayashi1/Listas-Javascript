/* 
4. Localizar o maior valor dentro de um array de números
*/
let numeros = [-500,100,160,-300]
let maior = 0
for(i=0;i<numeros.length;i++){
    if(maior<numeros[i]){
        maior = numeros[i]
    }
}
console.log(maior)
