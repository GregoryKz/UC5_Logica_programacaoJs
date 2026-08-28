// Enunciado: Verificar se um cliente pode receber um empréstimo.
// Regras: Aprovado se idade >= 21 E rendaMensal >= 2000.
// Entrada: idade (número), rendaMensal (número)
// Saída esperada: "Empréstimo aprovado" ou "Empréstimo negado"

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade: "));
let rendaMensal = Number(prompt("Digite a renda mensal: "));

if (idade >= 21 && rendaMensal >= 2000) {
  console.log("Empréstimo aprovado");
} else {
  console.log("Empréstimo negado");
}
