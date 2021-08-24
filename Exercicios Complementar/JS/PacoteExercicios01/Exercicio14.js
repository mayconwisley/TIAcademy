/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba dois
    números maiores que zero, calcule e mostre um elevado ao outro.
*/
document.write("Pacote de Exercicio 01 - Exercicio 14");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 14");

var valorA, valorB, potencia;

valorA = parseFloat(prompt("Digite o 1º Numero"));
valorB = parseFloat(prompt("Digite o 2º Numero"));

potencia = Math.pow(valorA, valorB);

document.write("Raiz cubica: ", potencia);
document.write("<br>");
document.write("<br>");

console.log("Raiz cubica: ", potencia);