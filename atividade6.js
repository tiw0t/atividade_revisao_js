//6- Elabore um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
//Valor do Jantar R$: 80.00 
//Taxa do Garçom R$: 8.00 
//Total a Pagar R$: 88.00
const prompt = require("prompt-sync")() 
let valor = parseInt(prompt("Informe o valor do jantar: "));
let taxa = (valor*0.10)
let total = taxa+valor
console.log("O total do jantar é: ",total)