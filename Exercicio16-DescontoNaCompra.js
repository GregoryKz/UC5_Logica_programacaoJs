// Enunciado: Receber o valor de uma compra e aplicar desconto conforme o valor.
// Regras: Se valorCompra >= 100, aplicar 10% de desconto. Senão, manter o valor.
// Entrada: valorCompra (número)
// Saída esperada: "Valor final: R$ 90.00"

const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da compra: "));
let valorFinal;

if (valorCompra >= 100) {
  valorFinal = valorCompra * 0.9;
} else {
  valorFinal = valorCompra;
}

console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
