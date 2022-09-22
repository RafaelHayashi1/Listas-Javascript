/* 
5. Retornar a maior string de um array
*/
function mstring(palavra){
    let res = ''
    for(i=0;i<palavra.length;i++){
        if(res.length<palavra[i].length){ 
            res = palavra[i]
        }
    }    
    return res
}

let palavras = ['TESTEEEEEEEEEEEE','WWWW','KKKKKK','VVVVVVVVV']
console.log(mstring(palavras))