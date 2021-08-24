/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba três números
    obrigatoriamente em ordem crescente e um quarto número que não siga esta regra.
    Mostre, em seguida, os quatro números em ordem não-crescente.
*/

document.write("Pacote de Exercicio 03 - Exercicio 10");
console.log("Pacote de Exercicio 03 - Exercicio 10");
document.write("<br>");
document.write("<br>");

var valorA, valorB, valorC, valorB;

valorA = parseInt(prompt("Digite o valor A"));
valorB = parseInt(prompt("Digite o valor B"));
valorC = parseInt(prompt("Digite o valor C"));
valorD = parseInt(prompt("Digite o valor D"));

if (valorD > valorC) {
    document.write(valorD, " - ", valorC, " - ", valorB, " - ", valorA);
    document.write("<br>");
    document.write("<br>");
    console.log(valorD, " - ", valorC, " - ", valorB, " - ", valorA);
}
if (valorD > valorB && valorD <= valorC) {
    document.write(valorC, " - ", valorD, " - ", valorB, " - ", valorA);
    document.write("<br>");
    document.write("<br>");
    console.log(valorC, " - ", valorD, " - ", valorB, " - ", valorA);
}
if (valorD > valorA && valorD <= valorB) {
    document.write(valorC, " - ", valorB, " - ", valorD, " - ", valorA);
    document.write("<br>");
    document.write("<br>");
    console.log(valorC, " - ", valorB, " - ", valorD, " - ", valorA);
}
if(valorD <= valorA){
    document.write(valorC, " - ", valorB, " - ", valorA, " - ", valorD);
    document.write("<br>");
    document.write("<br>");
    console.log(valorD, " - ", valorB, " - ", valorA, " - ", valorD);
}