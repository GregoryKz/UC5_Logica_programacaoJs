// Enunciado: Calcular o valor do ingresso de acordo com a idade do cliente.
// Regras: Até 12 anos: meia-entrada. 60+ anos: meia-entrada. Demais: valor cheio.
// Entrada: idade (número)
// Saída esperada: "Valor do ingresso: R$ 15.00 (meia)"

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade: "));

if (idade <= 12 || idade >= 60) {
  console.log("Valor do ingresso: R$ 15.00 (meia)");
} else {
  console.log("Valor do ingresso: R$ 30.00 (inteira)");
}
