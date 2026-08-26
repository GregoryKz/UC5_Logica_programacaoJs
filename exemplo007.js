const prompt = require("prompt-sync")();

let respostaUsr = prompt("O professor esta em sala? (sim) ou (não)");

if (respostaUsr == "sim" ||respostaUsr == "Sim" ||respostaUsr== "SIM") {
	console.log("O professor e massa!");
};


console.log("teste");