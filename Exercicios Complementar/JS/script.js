/*Exercios 1 */
/*var n1 = parseInt(prompt("Insira o primeiro numero."));
var n2 = parseInt(prompt("Insira o segundo numero."));
var n3 = parseInt(prompt("Insira o terceiro numero."));
var n4 = parseInt(prompt("Insira o quarto numero."));

var s = n1 + n2 + n3 + n4;

console.log("A soma dos valores é: " + s);
*/

/*var numero = 0;
numero += parseInt(prompt("Teste"))
numero += parseInt(prompt("Teste"))
numero += parseInt(prompt("Teste"))
numero += parseInt(prompt("Teste"))

console.log("O resultado: " + numero);*/

/*var n1 = parseFloat(prompt("Digite um valor 1º"));
var n2 = parseFloat(prompt("Digite um valor 2º"));
var n3 = parseFloat(prompt("Digite um valor 3º"));

if (n1 > n2 && n1.n3) {
    console.log("Satisfeito");
}
else {
    console.log("Erro");
}*/

/*
var num = parseInt(prompt("Insira um numero"));
num = num % 2;
if (num == 0) {
    console.log("Par");
}
else {
    console.log("Impar");
}*/

/*
var salario = parseFloat(prompt("Digite salário:"));
const grat = 600;
const imp = 0.10;

var salLiquido = salario + grat -(salario * imp);

console.log("Salário," + salLiquido);
*/

var salario = parseFloat(prompt("Salário:"));
var bonif = 0;
var aux = 0;
if (salario <= 500) {
    bonif = salario * 0.05;
} else if (salario >= 500.01 && salario <= 1200) {
    bonif = salario * 0.12;
}


if (salario <= 600) {
    aux = 150;
}
else {
    aux = 600;
}

salario = salario + bonif + aux;

console.log(salario);

/*Pessoal... deixo o convite pra nossa live de hoje à tarde, às 18hs. Bate-papo com o Prof. Rogério, direto do Canadá. Falaremos sobre o cenário do mercado de TI por lá - https://youtu.be/e2KaapyJz8E*/