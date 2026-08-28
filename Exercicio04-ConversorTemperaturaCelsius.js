//solicite ao usuario a temoperatura em graus celsius e converta para fahrenheit
const prompt = require("prompt-sync")();

let TemperaturaCelsius = Number(prompt("Digite a temperatura atual em graus Celsius:"))
let conversao  = ((TemperaturaCelsius * 9) / 5 ) + 32
console.log(` ${TemperaturaCelsius}°Celsius em Fahrenheit e:${conversao}°F`)


