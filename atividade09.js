//9- Elabore um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. 
// Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x. 

const prompt = require("prompt-sync")()
let valor_total = parseInt(prompt("Digite o valor da compra: "));
let pagamento = parseInt(prompt("Digite 1 para pagar a vista com 10% de desconto, digite 2 para pagar dividido em 3x sem juros : "));
let poss1 = valor_total-(valor_total*0.10)
let poss2 = valor_total/3
if (pagamento == "1")
console.log("O total é: ", poss1);
else if (pagamento == "2")
console.log("O total é: ",poss2);