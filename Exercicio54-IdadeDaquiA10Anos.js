// Enunciado: Calcular a idade que uma pessoa terá daqui a 10 anos.

const prompt = require("prompt-sync")();

let idadeAtual = Number(prompt("Digite sua idade atual: "));

let idadeFutura = idadeAtual + 10;

console.log(`Sua idade daqui a 10 anos será: ${idadeFutura} anos`);
