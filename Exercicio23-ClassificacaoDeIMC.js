// Enunciado: Receber o peso e a altura de uma pessoa, calcular o IMC e classificá-lo.
// Regras: IMC = peso / (altura × altura). Abaixo de 18.5: Abaixo do peso. 18.5 a 24.9: Peso normal. 25 a 29.9: Sobrepeso. 30 ou mais: Obesidade.
// Entrada: peso (número, kg), altura (número, m)
// Saída esperada: "IMC: 22.9 — Peso normal"

const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite o peso em kg: "));
let altura = Number(prompt("Digite a altura em metros: "));
let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log(`IMC: ${imc.toFixed(1)} — Abaixo do peso`);
} else if (imc < 25) {
  console.log(`IMC: ${imc.toFixed(1)} — Peso normal`);
} else if (imc < 30) {
  console.log(`IMC: ${imc.toFixed(1)} — Sobrepeso`);
} else {
  console.log(`IMC: ${imc.toFixed(1)} — Obesidade`);
}
