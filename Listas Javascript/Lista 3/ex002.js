/*
2. Faça um Programa que calcule a área de um quadrado, em seguida mostre o
dobro desta área para o usuário.
*/
function aquadrado(lado){
    var area = 0
    area = lado*lado
    return area*=2
}

var lado = prompt("Digite o lado do quadrado")
console.log(`Area do quadrado 2x:${aquadrado(lado)}`)