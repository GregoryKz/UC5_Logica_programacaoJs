// Enunciado: Verificar se um número é par ou ímpar.
// Regras: Use o operador % (resto da divisão por 2).
// Entrada: numero (número)
// Saída esperada: "Par" ou "Ímpar"

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

if (numero % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
