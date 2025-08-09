//2- Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. 
// Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. 
// E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave” 
const prompt = require("prompt-sync")() 
let numero = parseInt(prompt("Digite a velocidade: "));

if (numero <= 60){
    console.log("Sem Multa")
}
if (numero < 72){
console.log("Multa leve")
}
else if(numero> 72){
    console.log("Multa Grave")
}


