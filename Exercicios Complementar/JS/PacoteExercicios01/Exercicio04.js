/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba o salário de
    um funcionário, calcule e mostre o novo salário, sabendo-se que este sofreu um
    aumento de 25%.
 */

document.write("Pacote de Exercicio 01 - Exercicio 04");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 04");

var salario;
const porc = 1.25;

salario = parseFloat(prompt("Digite o valor do salario"));

salario = salario * porc;

document.write("Novo salario: ", salario);
document.write("<br>");
document.write("<br>");
console.log("Novo salario: ", salario);