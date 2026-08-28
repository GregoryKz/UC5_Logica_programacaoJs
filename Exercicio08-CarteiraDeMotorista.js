// Enunciado: Verificar se a pessoa já pode tirar carteira de motorista pela idade.
// Regras: No Brasil, a idade mínima é 18 anos.
// Entrada: idade (número)
// Saída esperada: "Você já pode tirar sua CNH!"

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));

if (idade >= 18) {
  console.log("Você já pode tirar sua CNH!");
}
