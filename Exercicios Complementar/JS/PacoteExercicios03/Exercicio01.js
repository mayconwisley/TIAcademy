/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba dois números
    e mostre o maior deles. Caso eles sejam iguais, deve-se mostrar a mensagem "Os
    números são iguais".
*/

var valorA, valorB;

valorA = parseFloat(prompt("Digite o valor A"));
valorB = parseFloat(prompt("Digite o valor B"));

if(valorA > valorB){
    document.write("Valor de A: ", valorA, " é maior que o Valor de B: ", valorB);
    document.write("<br>");
    document.write("<br>");
    console.log("Valor de A: ", valorA, " é maior que o Valor de B: ", valorB);
}
if(valorB > valorA){
    document.write("Valor de B: ", valorB, " é maior que o Valor de A: ", valorA);
    document.write("<br>");
    document.write("<br>");
    console.log("Valor de B: ", valorB, " é maior que o Valor de A: ", valorA);
}
if(valorA === valorB){
    document.write("Valor de A: ", valorA, " e Valor de B: ", valorB, " são iguais");
    document.write("<br>");
    document.write("<br>");
    console.log("Valor de A: ", valorA, " e Valor de B: ", valorB, " são iguais");
}