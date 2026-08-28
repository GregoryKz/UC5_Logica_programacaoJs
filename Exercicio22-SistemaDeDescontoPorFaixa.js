// Enunciado: Receber o valor da compra e aplicar descontos diferentes por faixa de preço.
// Regras: >=500: 20% | >=200: 10% | >=100: 5% | senão: sem desconto.
// Entrada: valorCompra (número)
// Saída esperada: "Valor final: R$ 180.00"

const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da compra: "));
let valorFinal;

if (valorCompra >= 500) {
  valorFinal = valorCompra * 0.8;
} else if (valorCompra >= 200) {
  valorFinal = valorCompra * 0.9;
} else if (valorCompra >= 100) {
  valorFinal = valorCompra * 0.95;
} else {
  valorFinal = valorCompra;
}

console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
