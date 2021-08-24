/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que calcule e mostre a
    área de um círculo. Sabe-se que: Área = Pi * R2, aonde Pi = 3,14.
*/
document.write("Pacote de Exercicio 01 - Exercicio 10");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 10");

var raio, area;
const pi = 3.14;

raio = parseFloat(prompt("Digite o raio"));

area = pi * raio * raio;

document.write("Area do circulo: ", area);
document.write("<br>");
document.write("<br>");
console.log("Area do circulo: ", area);