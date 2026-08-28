// Enunciado: Solicitar dois números e a operação desejada, e calcular o resultado.
// Regras: Use if / else if / else para escolher qual conta fazer.
// Entrada: n1, n2 (números), operacao (texto: + - * /)
// Saída esperada: "Resultado: 15"

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");
let resultado;

if (operacao === "+") {
  resultado = n1 + n2;
} else if (operacao === "-") {
  resultado = n1 - n2;
} else if (operacao === "*") {
  resultado = n1 * n2;
} else if (operacao === "/") {
  resultado = n1 / n2;
} else {
  resultado = "Operação inválida";
}

console.log(`Resultado: ${resultado}`);
