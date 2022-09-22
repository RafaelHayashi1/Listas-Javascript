/* 
7. Criar uma função para inverter um array
*/
function inverter(n1){
    let res = n1
    let reve = []
    for(i=n1.length-1;i>=0;i--){
        reve.push(n1[i])
    }
    return reve
}

let numeros =[30,20,10]
console.log(inverter(numeros))