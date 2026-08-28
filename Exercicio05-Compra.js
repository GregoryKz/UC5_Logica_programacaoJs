// solicitar nome do produto, preco,quantidade e mostrar o resultado da compra

const prompt = require("prompt-sync")();
let listaCompra = {};

listaCompra.nome= prompt("Digite o nome do produto:")
listaCompra.preco = Number(prompt("Digite o valor do produto:"))
listaCompra.quantidade = Number(prompt("Digite a quantidade que ira levar: "))

//console.log(listaCompra)

console.log(`Você esta levando ${listaCompra["quantidade"]}Unidades    
             Total da sua compra e de:${listaCompra["preco"]*listaCompra["quantidade"]}`)