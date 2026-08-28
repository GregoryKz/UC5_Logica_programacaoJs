// Enunciado: Informar a situação do personagem de acordo com suas vidas restantes.
// Regras: 0 vidas: Game Over. 1–2: Cuidado! 3 ou mais: Tudo certo!
// Entrada: vidas (número)
// Saída esperada: "Situação: Cuidado!"

const prompt = require("prompt-sync")();

let vidas = Number(prompt("Digite a quantidade de vidas: "));

if (vidas === 0) {
  console.log("Situação: Game Over");
} else if (vidas >= 1 && vidas <= 2) {
  console.log("Situação: Cuidado!");
} else {
  console.log("Situação: Tudo certo!");
}
