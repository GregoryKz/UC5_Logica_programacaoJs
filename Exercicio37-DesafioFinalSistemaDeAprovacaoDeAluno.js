// Enunciado: Criar um sistema que recebe os dados de um aluno e informa sua situação final.
// Regras: Aprovado: média >= 7 E frequência >= 75. Recuperação: média >= 5 E média < 7 E frequência >= 75. Reprovado por nota: média < 5. Reprovado por falta: frequência < 75.
// Entrada: nome do aluno (texto), nota1, nota2, nota3 (números), frequência em % (número)
// Saída esperada: ===== RESULTADO ===== / Aluno: João / Média: 8.2 / Frequência: 87% / Situação: APROVADO

const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do aluno: ");
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let frequencia = Number(prompt("Digite a frequência em %: "));

let media = (nota1 + nota2 + nota3) / 3;

console.log("===== RESULTADO =====");
console.log(`Aluno: ${nome}`);
console.log(`Média: ${media.toFixed(1)}`);
console.log(`Frequência: ${frequencia}%`);

if (media >= 7 && frequencia >= 75) {
  console.log("Situação: APROVADO");
} else if (media >= 5 && media < 7 && frequencia >= 75) {
  console.log("Situação: RECUPERAÇÃO");
} else if (media < 5) {
  console.log("Situação: REPROVADO POR NOTA");
} else if (frequencia < 75) {
  console.log("Situação: REPROVADO POR FALTA");
}
