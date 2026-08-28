// Enunciado: Calcular o preço total de uma compra usando variáveis preço e quantidade.

const prompt = require("prompt-sync")();

let preco = Number(prompt("Digite o preço do produto: "));
let quantidade = Number(prompt("Digite a quantidade: "));

let total = preco * quantidade;

console.log(`Preço total da compra: R$ ${total.toFixed(2)}`);
