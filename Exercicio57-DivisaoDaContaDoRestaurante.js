// Enunciado: Uma conta de restaurante ficou R$ 240 para 4 pessoas. Calcular quanto cada pessoa pagará.

const prompt = require("prompt-sync")();

let totalConta = Number(prompt("Digite o valor total da conta: "));
let quantidadePessoas = Number(prompt("Digite a quantidade de pessoas: "));

let valorPorPessoa = totalConta / quantidadePessoas;

console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);
