/*
2. Identifique as classes e implemente um programa para a seguinte
especificação: “O supermercado vende diferentes tipos de produtos.
Cada produto tem um preço e uma quantidade em estoque. Um
pedido de um cliente é composto de itens, onde cada item especifica
o produto que o cliente deseja e a respectiva quantidade. Esse
pedido pode ser pago em dinheiro, cheque ou cartão.”
*/
const mercado = {
    produto1:'banana',preco:3,quantidade1:5,
    produto2:'maça',preco1:2,quantidade2:2,
    produto3:'pão',preco2:1,quantidade3:8,
}
const pedido = {
    pedidoA:mercado.produto1,quantidadec1:mercado.quantidade1-2,//entrada estática de 3 bananas,.
    pedidoB:mercado.produto3,quantidadec2:mercado.quantidade3-1,//entrada estática de 7 pães.
    pago:'Esse pedido pode ser pago em dinheiro, cheque ou cartão.', 
}
let preco = (pedido.quantidadec1*mercado.preco) + (pedido.quantidadec2*mercado.preco2)
console.log(`Produto:${pedido.pedidoA}\nQuantidade:${pedido.quantidadec1}`)
console.log(`Produto:${pedido.pedidoB}\nQuantidade:${pedido.quantidadec2}`)
console.log(`Preço total a pagar:${preco}`)
console.log(`${pedido.pago}`)