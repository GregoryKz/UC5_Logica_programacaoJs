// Enunciado: Liberar acesso apenas se usuário e senha estiverem corretos.
// Regras: Acesso liberado se usuario === "admin" E senha === "1234".
// Entrada: usuario, senha (textos)
// Saída esperada: "Acesso liberado" ou "Usuário ou senha incorretos"

const prompt = require("prompt-sync")();

let usuario = prompt("Digite o usuário: ");
let senha = prompt("Digite a senha: ");

if (usuario === "admin" && senha === "1234") {
  console.log("Acesso liberado");
} else {
  console.log("Usuário ou senha incorretos");
}
