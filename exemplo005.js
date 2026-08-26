const prompt = require("prompt-sync")();


let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let endereco = prompt("Digite seu endereco:");

console.log("Cadastro salvo o seu nome e:"+nome+" tem"+idade+"anos "+"seu enedereco e:"+endereco);