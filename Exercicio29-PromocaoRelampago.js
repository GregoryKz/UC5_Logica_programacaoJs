// Enunciado: Verificar se um cliente ganha frete grátis numa promoção.
// Regras: Frete grátis se valorCompra >= 300 OU clienteVip === "sim".
// Entrada: valorCompra (número), clienteVip (texto: sim/não)
// Saída esperada: "Frete grátis liberado!" ou "Frete normal"

const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da compra: "));
let clienteVip = prompt("O cliente é VIP? (sim/não): ");

if (valorCompra >= 300 || clienteVip === "sim") {
  console.log("Frete grátis liberado!");
} else {
  console.log("Frete normal");
}
