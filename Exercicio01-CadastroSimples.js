// solicite a idade o nome e cidade de um usuario mostre uma mensagem organizada com os tres dadods

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade:");
let cidade = prompt("Digite sua cidade:");


console.log(`Nome:${nome}, idade:${idade}, cidade:${cidade}`);