/*
    Desenvolva um algoritmo que receba dois números, calcule e mostre a multiplicação
    entre eles, se ambos forem iguais. Caso o primeiro seja maior que o segundo, mostre a
    subtração do primeiro pelo segundo. Caso contrário, mostre a soma entre os dois.
*/

var valorA, valorB, total;

valorA = parseInt(prompt("Digite o valor A"));
valorB = parseInt(prompt("Digite o valor B"));

if (valorA === valorB) {
    total = valorA * valorB;
    document.write("Multiplicação: ");
    console.log("Multiplicação: ");
}
if (valorA > valorB) {
    total = valorA - valorB;
    document.write("Subtração: ");
    console.log("Subtração: ");
}
if (valorA < valorB) {
    total = valorA + valorB;
    document.write("Adição: ");
    console.log("Adição: ");
}

document.write(total);
document.write("<br>");
document.write("<br>");

console.log(total);