// Enunciado: Calcular os pontos de fidelidade ganhos numa compra.
// Regras: 1 ponto a cada R$ 10 gastos. Bônus de 50 pontos extras se valorCompra >= 500.
// Entrada: valorCompra (número)
// Saída esperada: "Pontos ganhos: 80"

const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da compra: "));
let pontos = Math.floor(valorCompra / 10);

if (valorCompra >= 500) {
  pontos += 50;
}

console.log(`Pontos ganhos: ${pontos}`);
