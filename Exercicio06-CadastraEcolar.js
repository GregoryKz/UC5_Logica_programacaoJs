//solicite a matricula, nome e a turama do aluno e exibia uma mensagem 
const prompt = require("prompt-sync")();
let aluno = {};

aluno.nome = prompt("Digite nome do aluno:");
aluno.matricula = prompt("Digite a matricula do aluno:");
aluno.turma = prompt("Digite turma do aluno:")

console.log(`Aluno ${aluno["nome"]}(matricula ${aluno["matricula"]}) cadastrado na turma ${aluno["turma"]} `)

