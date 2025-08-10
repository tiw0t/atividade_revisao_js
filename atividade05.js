//5- Elabore um programa que leia dois números. Calcule e informe a soma desses números.
const prompt = require("prompt-sync")() 
let numero1 = parseInt(prompt("Digite um numero: "));
let numero2 = parseInt(prompt("Digite um numero: "));

let resultado = numero1 + numero2
console.log("O Resultado da soma é: ", resultado)