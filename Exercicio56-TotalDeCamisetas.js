// Enunciado: Uma camiseta custa R$ 50. Criar uma variável com a quantidade de camisetas e calcular o total.

const prompt = require("prompt-sync")();

let quantidadeCamisetas = Number(prompt("Digite a quantidade de camisetas: "));
let precoUnitario = 50;

let total = quantidadeCamisetas * precoUnitario;

console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
