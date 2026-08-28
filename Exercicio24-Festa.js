// Enunciado: Verificar se a entrada na festa é permitida.
// Regras: Permitida se idade >= 18 E possuiConvite === "sim".
// Entrada: idade (número), possuiConvite (texto: sim/não)
// Saída esperada: "Entrada permitida" ou "Entrada negada"

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade: "));
let possuiConvite = prompt("Você possui convite? (sim/não): ");

if (idade >= 18 && possuiConvite === "sim") {
  console.log("Entrada permitida");
} else {
  console.log("Entrada negada");
}
