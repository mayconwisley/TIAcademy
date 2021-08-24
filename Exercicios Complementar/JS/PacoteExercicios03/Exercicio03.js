/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba um número
    inteiro e verifique se esse número é par ou ímpar.
*/

var num = parseInt(prompt("Insira um numero"));
num = num % 2;
if (num == 0) {
    document.write("Numero é Par");
    document.write("<br>");
    document.write("<br>");
    console.log("Numero é Par");
}
else {
    document.write("Numero é Impar");
    document.write("<br>");
    document.write("<br>");
    console.log("Numero é Impar");
}