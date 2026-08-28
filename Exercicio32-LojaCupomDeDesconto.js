// Enunciado: Aplicar um cupom de desconto apenas em compras acima de determinado valor.
// Regras: Desconto de 15% se valorCompra >= 150 E temCupom === "sim".
// Entrada: valorCompra (número), temCupom (texto: sim/não)
// Saída esperada: "Valor com desconto: R$ 127.50"

const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da compra: "));
let temCupom = prompt("Tem cupom de desconto? (sim/não): ");
let valorFinal;

if (valorCompra >= 150 && temCupom === "sim") {
  valorFinal = valorCompra * 0.85;
} else {
  valorFinal = valorCompra;
}

console.log(`Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
