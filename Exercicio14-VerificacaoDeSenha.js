// Enunciado: Receber uma senha digitada e verificar se corresponde a uma senha fixa no código.
// Regras: Compare com uma senha fixa, ex: "1234".
// Entrada: senhaDigitada (texto)
// Saída esperada: "Acesso liberado" ou "Senha incorreta"

const prompt = require("prompt-sync")();

let senhaDigitada = prompt("Digite a senha: ");
let senhaFixa = "1234";

if (senhaDigitada === senhaFixa) {
  console.log("Acesso liberado");
} else {
  console.log("Senha incorreta");
}
