// Enunciado: Verificar se um número informado é maior que 100.
// Regras: Se numero > 100, mostrar uma mensagem. Use apenas if, sem else.
// Entrada: numero (número)
// Saída esperada: "Esse número é maior que 100!"

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

if (numero > 100) {
  console.log("Esse número é maior que 100!");
}
