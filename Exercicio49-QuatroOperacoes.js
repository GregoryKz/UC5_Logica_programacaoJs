// Enunciado: Criar dois números e mostrar a soma, subtração, multiplicação e divisão.

const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

console.log(`Soma: ${numero1 + numero2}`);
console.log(`Subtração: ${numero1 - numero2}`);
console.log(`Multiplicação: ${numero1 * numero2}`);
console.log(`Divisão: ${numero1 / numero2}`);
