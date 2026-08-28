//Solicite a idade do usuario e calcular aproximadamente o nao de nascimento.
const prompt = require("prompt-sync")();

let ano = prompt("Digite o ano em que você nasceu:");
let anoAtual = 2026;

console.log(`Sua idade é:${anoAtual-ano}`)