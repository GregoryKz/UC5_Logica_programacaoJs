// Enunciado: Crie duas variáveis, a e b, com valores diferentes, e mostre seus valores trocados entre si (o valor de a deve ir para b e vice-versa).
// Regras: Use uma variável auxiliar para não perder nenhum dos valores durante a troca.

let a = 10;
let b = 20;
let auxiliar;

auxiliar = a;
a = b;
b = auxiliar;

console.log(`Depois da troca: a = ${a}, b = ${b}`);
