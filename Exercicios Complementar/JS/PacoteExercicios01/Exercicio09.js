/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que calcule e mostre a
    área de um triângulo. Sabe-se que: Área = (base * altura)/2.
 */

document.write("Pacote de Exercicio 01 - Exercicio 09");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 09");

var altura, base, area;
base = parseFloat(prompt("Informe a base"));
altura = parseFloat(prompt("Informe a autura"));

area = (base * altura) / 2;

document.write("Area do triangulo: ", area);
document.write("<br>");
document.write("<br>");
console.log("Area do triangulo: ", area);

