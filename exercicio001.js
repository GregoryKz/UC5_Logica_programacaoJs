const prompt = require("prompt-sync")();


let numeroDigitado = Number(prompt("Digite um numero para saber se e maior que 100:"));


if (numeroDigitado > 100){
	console.log("o numero digitado e maior que 100");
} else if (numeroDigitado == 100){
console.log("seu numero e igual a 100");
} else {
console.log("seu numero é menor do que 100");
}