// Enunciado: Calcular o reajuste salarial de um funcionário conforme tempo de empresa e desempenho.
// Regras: Se tempoEmpresa >= 5 E desempenho === "Ótimo": reajuste de 15%. Se tempoEmpresa >= 2 E desempenho === "Bom": reajuste de 8%. Caso contrário: reajuste de 3%.
// Entrada: tempoEmpresa (número, anos), desempenho (texto), salario (número)
// Saída esperada: "Novo salário: R$ 3450.00"

const prompt = require("prompt-sync")();

let tempoEmpresa = Number(prompt("Digite o tempo de empresa em anos: "));
let desempenho = prompt("Digite o desempenho (Ótimo/Bom/Regular): ");
let salario = Number(prompt("Digite o salário atual: "));
let novoSalario;

if (tempoEmpresa >= 5 && desempenho === "Ótimo") {
  novoSalario = salario * 1.15;
} else if (tempoEmpresa >= 2 && desempenho === "Bom") {
  novoSalario = salario * 1.08;
} else {
  novoSalario = salario * 1.03;
}

console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
