// Enunciado: Perguntar a temperatura do dia e sugerir um destino de passeio.
// Regras: Se temperatura >= 28, sugerir praia. Senão, sugerir montanha.
// Entrada: temperatura (número)
// Saída esperada: "Sugestão: praia" ou "Sugestão: montanha"

const prompt = require("prompt-sync")();

let temperatura = Number(prompt("Digite a temperatura do dia: "));

if (temperatura >= 28) {
  console.log("Sugestão: praia");
} else {
  console.log("Sugestão: montanha");
}
