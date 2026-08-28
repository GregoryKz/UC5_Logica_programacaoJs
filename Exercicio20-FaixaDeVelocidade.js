// Enunciado: Solicitar a velocidade de um veículo e classificá-la.
// Regras: Baixa / Moderada / Alta / Muito alta (defina os limites, ex: 40, 80 e 120 km/h).
// Entrada: velocidade (número, km/h)
// Saída esperada: "Velocidade: Alta"

const prompt = require("prompt-sync")();

let velocidade = Number(prompt("Digite a velocidade do veículo (km/h): "));

if (velocidade < 40) {
  console.log("Velocidade: Baixa");
} else if (velocidade < 80) {
  console.log("Velocidade: Moderada");
} else if (velocidade < 120) {
  console.log("Velocidade: Alta");
} else {
  console.log("Velocidade: Muito alta");
}
