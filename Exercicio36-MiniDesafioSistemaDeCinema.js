// Enunciado: O sistema deve solicitar: nome, idade e se a pessoa possui ingresso.
// Regras: Defina uma idade mínima para o filme (ex: 14 anos). A pessoa precisa possuir ingresso. Mostre mensagens diferentes conforme a situação: entrada liberada, idade insuficiente, ou falta de ingresso.
// Entrada: nome (texto), idade (número), possuiIngresso (texto)

const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome: ");
let idade = Number(prompt("Digite a idade: "));
let possuiIngresso = prompt("A pessoa possui ingresso? (sim/não): ");

if (idade >= 14 && possuiIngresso === "sim") {
  console.log(`Olá, ${nome}! Entrada liberada.`);
} else if (idade < 14) {
  console.log(`Olá, ${nome}! Idade insuficiente para entrar.`);
} else {
  console.log(`Olá, ${nome}! Falta de ingresso.`);
}
