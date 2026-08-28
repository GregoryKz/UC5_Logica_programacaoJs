// Enunciado: Verificar se uma pessoa já atingiu a maioridade penal.
// Regras: Se idade >= 18, mostrar a mensagem. Use apenas if, sem else.
// Entrada: idade (número)
// Saída esperada: "Você já atingiu a maioridade penal."

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));

if (idade >= 18) {
  console.log("Você já atingiu a maioridade penal.");
}
