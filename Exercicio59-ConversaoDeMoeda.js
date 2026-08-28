// Enunciado: Um valor em reais deve ser convertido para dólar, considerando uma cotação de R$ 5,00 por dólar.
// Regras: valorEmDolar = valorEmReais / cotacao.

const prompt = require("prompt-sync")();

let valorEmReais = Number(prompt("Digite o valor em reais: "));
let cotacao = 5;

let valorEmDolar = valorEmReais / cotacao;

console.log(`Valor em dólar: US$ ${valorEmDolar.toFixed(2)}`);
