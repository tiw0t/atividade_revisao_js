//3- Elabore um programa que leia três lados e verifique se eles podem ou não formar um triângulo. 
// Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. 
// Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes). 

const prompt = require("prompt-sync")() 
let a = parseInt(prompt("Digite o número: "));
let b = parseInt(prompt("Digite o número: "));
let c = parseInt(prompt("Digite o número: "));

if (a == b & b == c){
    console.log("O Triângulo é Equilátero")
}
else if ( a == b & a != c){
    console.log("O Triângulo é Isóseles")
}
else if ( b == c & b != a){
    console.log("O Triângulo é Isóseles")
}
else if ( c == a & c != b){
    console.log("O Triângulo é Isóseles")
}
else if(c!=a & a!=b){
    console.log("O Triângulo é Escaleno")
}