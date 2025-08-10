//11- Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. 
// Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda.

const prompt = require("prompt-sync")()
let numChinchilas = parseInt(prompt("Informe o número inicial de chinchilas (deve ser >= 2):"));
if (isNaN(numChinchilas) || numChinchilas < 2) {
alert("Por favor, insira um número inicial de chinchilas válido (mínimo de 2).");
} else {
let anos = parseInt(prompt("Informe o número de anos para a previsão:"));


if (isNaN(anos) || anos <= 0) {
    alert("Por favor, insira um número de anos válido (maior que 0).");
} else {
    let anoAtual = 1;
    while (anoAtual <= anos) {
console.log(`Ano ${anoAtual}: ${numChinchilas} chinchilas`);

if (anoAtual < anos) {
        numChinchilas *= 3;
}
anoAtual++;
}
}
}