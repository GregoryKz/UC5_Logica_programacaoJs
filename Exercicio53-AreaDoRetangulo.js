// Enunciado: Criar variáveis para base e altura de um retângulo e calcular sua área.

const prompt = require("prompt-sync")();

let base = Number(prompt("Digite a base do retângulo: "));
let altura = Number(prompt("Digite a altura do retângulo: "));

let area = base * altura;

console.log(`Área do retângulo: ${area}`);
