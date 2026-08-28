//solicite a nota de 3 provas e calcule a media desse aluno 
const prompt = require("prompt-sync")();

const prova1 = Number(prompt("Digite a nota da sua primeira prova (P1):"));
const prova2 = Number(prompt("Digite a nota da segunda prova (P2):"));
const prova3 = Number(prompt("Digite a nota da terceira prova (P3):"));

let media = (prova1 + prova2 +prova3) /3

console.log(`A nota da prova (1) foi ${prova1}, a nota da prova (2) foi ${prova2}, a nota da prova (3) e sua media e:${media}`)
