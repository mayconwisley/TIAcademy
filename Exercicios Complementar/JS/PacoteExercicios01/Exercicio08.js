/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba o valor de
    um depósito e o valor da taxa de juros, calcule e mostre o valor do rendimento e o
    valor total depois do rendimento.
*/

document.write("Pacote de Exercicio 01 - Exercicio 08");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 08");

var vlrDeposito, vlrTaxa;

vlrDeposito = parseFloat(prompt("Valor do deposito"));
vlrTaxa = parseFloat(prompt("Valor da taxa"));

vlrTaxa = vlrDeposito * (vlrTaxa / 100);
vlrDeposito = vlrDeposito + vlrTaxa;

document.write("Valor da taxa: ", vlrTaxa);
document.write("<br>");
document.write("Valor do deposito: ", vlrDeposito);
document.write("<br>");
document.write("<br>");

console.log("Valor da taxa: ", vlrTaxa);
console.log("Valor do deposito: ", vlrDeposito);