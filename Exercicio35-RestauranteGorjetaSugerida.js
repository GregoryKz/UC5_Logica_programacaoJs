// Enunciado: Sugerir o valor da gorjeta com base na avaliação do atendimento.
// Regras: Nota >= 8: 15% de gorjeta. Nota >= 5: 10%. Abaixo de 5: gorjeta opcional (0%).
// Entrada: valorConta (número), notaAtendimento (número, 0 a 10)
// Saída esperada: "Gorjeta sugerida: R$ 12.00"

const prompt = require("prompt-sync")();

let valorConta = Number(prompt("Digite o valor da conta: "));
let notaAtendimento = Number(prompt("Digite a nota do atendimento (0 a 10): "));
let gorjeta;

if (notaAtendimento >= 8) {
  gorjeta = valorConta * 0.15;
} else if (notaAtendimento >= 5) {
  gorjeta = valorConta * 0.10;
} else {
  gorjeta = 0;
}

console.log(`Gorjeta sugerida: R$ ${gorjeta.toFixed(2)}`);
