// Enunciado: Calcular a média de duas notas.

const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));

let media = (nota1 + nota2) / 2;

console.log(`Média: ${media}`);
