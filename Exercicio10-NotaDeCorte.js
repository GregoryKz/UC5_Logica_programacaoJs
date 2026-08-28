// Enunciado: Receber uma nota e informar se ela é maior ou igual a 7.
// Regras: Se nota >= 7, o aluno está aprovado.
// Entrada: nota (número)
// Saída esperada: "Parabéns, você foi aprovado!"

const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite a nota: "));

if (nota >= 7) {
  console.log("Parabéns, você foi aprovado!");
}
