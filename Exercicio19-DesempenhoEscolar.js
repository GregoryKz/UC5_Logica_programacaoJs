// Enunciado: Receber uma nota e mostrar uma classificação de desempenho.
// Regras: Excelente / Bom / Regular / Insuficiente.
// Entrada: nota (número)
// Saída esperada: "Classificação: Bom"

const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite a nota: "));

if (nota >= 9) {
  console.log("Classificação: Excelente");
} else if (nota >= 7) {
  console.log("Classificação: Bom");
} else if (nota >= 5) {
  console.log("Classificação: Regular");
} else {
  console.log("Classificação: Insuficiente");
}
