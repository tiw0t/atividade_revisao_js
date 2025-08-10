//4- Elabore um programa que leia um número. Calcule e informe o dobro desse número.
const prompt = require("prompt-sync")() 
let numero = parseInt(prompt("Digite um numero: "));
 console.log("O dobro de " + numero + " é: " + numero * 2)
