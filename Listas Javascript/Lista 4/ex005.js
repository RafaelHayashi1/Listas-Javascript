/* 
5. Retornar a maior string de um array
*/
function mstring(palavra){
    let res = 'w'
    for(i=0;i<palavra.length;i++){
        if(res.length<palavra[i].length){ //comparar o tamanho do res.length com palavra.lenght[i] se res for menor res = palavra[i]
            res = palavra[i]
        }
    }    
    return res
}

let palavras = ['TESTE','WWWW','KKKKKK','VVVVVVVVV']
console.log(mstring(palavras))