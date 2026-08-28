// Enunciado: Crie variáveis para armazenar seu nome e idade. Mostre com console.log.

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
