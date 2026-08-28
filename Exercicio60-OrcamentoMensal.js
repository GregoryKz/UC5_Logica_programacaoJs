// Enunciado: Uma pessoa recebe um salário de R$ 2.500 e possui os seguintes gastos: Aluguel: R$ 900, Internet: R$ 100, Alimentação: R$ 600, Transporte: R$ 300.
// Regras: Criar variáveis para todos os valores, calcular

const prompt = require("prompt-sync")();

let salario = Number(prompt("Digite o salário: "));
let aluguel = Number(prompt("Digite o valor do aluguel: "));
let internet = Number(prompt("Digite o valor da internet: "));
let alimentacao = Number(prompt("Digite o valor da alimentação: "));
let transporte = Number(prompt("Digite o valor do transporte: "));

let totalGastos = aluguel + internet + alimentacao + transporte;
let saldoRestante = salario - totalGastos;

console.log(`Total de gastos: R$ ${totalGastos.toFixed(2)}`);
console.log(`Saldo restante: R$ ${saldoRestante.toFixed(2)}`);
