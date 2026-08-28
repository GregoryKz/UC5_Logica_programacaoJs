// Enunciado: Um produto custa R$ 200 e possui desconto de R$ 30. Calcular o preço final.

const prompt = require("prompt-sync")();

let precoOriginal = Number(prompt("Digite o preço original do produto: "));
let desconto = Number(prompt("Digite o valor do desconto: "));

let precoFinal = precoOriginal - desconto;

console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);
