// Enunciado: Sugerir um plano de academia conforme a frequência semanal desejada.
// Regras: 1–2 dias: Plano Básico. 3–4 dias: Plano Intermediário. 5+ dias: Plano Premium.
// Entrada: diasPorSemana (número)
// Saída esperada: "Plano sugerido: Intermediário"

const prompt = require("prompt-sync")();

let diasPorSemana = Number(prompt("Digite quantos dias por semana você deseja treinar: "));

if (diasPorSemana >= 1 && diasPorSemana <= 2) {
  console.log("Plano sugerido: Básico");
} else if (diasPorSemana >= 3 && diasPorSemana <= 4) {
  console.log("Plano sugerido: Intermediário");
} else {
  console.log("Plano sugerido: Premium");
}
