// Enunciado: Criar variáveis com seu nome e idade e mostrar no terminal.

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
