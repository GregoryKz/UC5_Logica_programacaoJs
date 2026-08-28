// Enunciado: Crie variáveis para: nome, idade, curso e cidade. Mostre todas no terminal.

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let curso = prompt("Digite seu curso: ");
let cidade = prompt("Digite sua cidade: ");

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Curso: ${curso}`);
console.log(`Cidade: ${cidade}`);
