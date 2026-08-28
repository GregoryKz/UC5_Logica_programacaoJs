// Enunciado: Conceder desconto para estudantes ou idosos.
// Regras: Desconto se tipo === "estudante" OU idade >= 60.
// Entrada: tipo (texto), idade (número)
// Saída esperada: "Você tem direito a desconto!"

const prompt = require("prompt-sync")();

let tipo = prompt("Digite o tipo (estudante ou comum): ");
let idade = Number(prompt("Digite a idade: "));

if (tipo === "estudante" || idade >= 60) {
  console.log("Você tem direito a desconto!");
} else {
  console.log("Você não tem direito a desconto.");
}
