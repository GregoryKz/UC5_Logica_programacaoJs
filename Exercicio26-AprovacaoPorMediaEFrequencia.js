// Enunciado: Aprovar o aluno considerando média e frequência juntas.
// Regras: Aprovado se média >= 7 E frequência >= 75.
// Entrada: media (número), frequencia (número, %)
// Saída esperada: "Aprovado" ou "Reprovado"

const prompt = require("prompt-sync")();

let media = Number(prompt("Digite a média: "));
let frequencia = Number(prompt("Digite a frequência (%): "));

if (media >= 7 && frequencia >= 75) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
