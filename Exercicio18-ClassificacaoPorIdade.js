// Enunciado: Receber a idade da pessoa e classificar em faixa etária.
// Regras: Criança / Adolescente / Adulto / Idoso (defina as faixas). Ordene as condições da menor faixa para a maior, ou o contrário — mas seja consistente.
// Entrada: idade (número)
// Saída esperada: "Classificação: Adulto"

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade: "));

if (idade < 13) {
  console.log("Classificação: Criança");
} else if (idade < 18) {
  console.log("Classificação: Adolescente");
} else if (idade < 60) {
  console.log("Classificação: Adulto");
} else {
  console.log("Classificação: Idoso");
}
