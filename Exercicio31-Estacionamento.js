// Enunciado: Calcular o valor a pagar em um estacionamento por hora.
// Regras: Até 1h: R$ 5. De 2 a 4h: R$ 4/hora. Acima de 4h: R$ 3/hora.
// Entrada: horas (número)
// Saída esperada: "Total a pagar: R$ 16.00"

const prompt = require("prompt-sync")();

let horas = Number(prompt("Digite a quantidade de horas: "));
let total;

if (horas <= 1) {
  total = 5;
} else if (horas <= 4) {
  total = horas * 4;
} else {
  total = horas * 3;
}

console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
