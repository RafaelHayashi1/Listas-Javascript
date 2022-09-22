/* 
6. Criar uma função que junte dois arrays e retorno o resultado como
um novo array
*/
function juntar(n1,n2){
    let res = [...n1,...n2] 
    return res = res.sort()
}
let n1 = [10,20,30,80]
let n2 = [40,50,60,70,90]
console.log(juntar(n1,n2))