/* 
4. Localizar o maior valor dentro de um array de números
*/
let numeros = [50,100,60,30]
let maior = 1
numeros = numeros.sort()
for(i=0;i<numeros.length;i++){
    if(maior<numeros[i]){
        maior = numeros[i]
    }
}
console.log(maior)
