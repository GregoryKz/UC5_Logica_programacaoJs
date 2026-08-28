// Enunciado: Determinar o vencedor de uma rodada entre dois jogadores, usando apenas condicionais.
// Regras: Compare as combinações possíveis (pedra vence tesoura, tesoura vence papel, papel vence pedra). Comece tratando o empate (jogador1 === jogador2) antes das demais regras.
// Entrada: jogador1, jogador2 (texto: pedra / papel / tesoura)
// Saída esperada: "Jogador 1 venceu!" / "Jogador 2 venceu!" / "Empate!"

const prompt = require("prompt-sync")();

let jogador1 = prompt("Jogador 1: (pedra/papel/tesoura): ");
let jogador2 = prompt("Jogador 2: (pedra/papel/tesoura): ");

if (jogador1 === jogador2) {
  console.log("Empate!");
} else if (
  (jogador1 === "pedra" && jogador2 === "tesoura") ||
  (jogador1 === "tesoura" && jogador2 === "papel") ||
  (jogador1 === "papel" && jogador2 === "pedra")
) {
  console.log("Jogador 1 venceu!");
} else {
  console.log("Jogador 2 venceu!");
}
