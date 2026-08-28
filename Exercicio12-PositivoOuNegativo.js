// Enunciado: Verificar se um número é positivo ou negativo.
// Regras: if (numero > 0) positivo, senão negativo.
// Entrada: numero (número)
// Saída esperada: "O número é positivo." ou "O número é negativo."

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

if (numero > 0) {
  console.log("O número é positivo.");
} else {
  console.log("O número é negativo.");
}
