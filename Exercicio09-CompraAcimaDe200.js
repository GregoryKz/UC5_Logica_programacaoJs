// Enunciado: Verificar se o valor de uma compra é superior a R$ 200.
// Regras: Se valorCompra > 200, avisar o cliente. Use apenas o if — o caso contrário será visto no próximo bloco.
// Entrada: valorCompra (número)
// Saída esperada: "Sua compra pode ter frete grátis!"

const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Digite o valor da compra: "));

if (valorCompra > 200) {
  console.log("Sua compra pode ter frete grátis!");
}
