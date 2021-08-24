/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba o salário-
    base de um funcionário, calcule e mostre o salário a receber, sabendo-se que esse
    funcionário tem gratificação de 5% sobre o salário-base e paga imposto de 7% sobre o
    salário-base.
*/

document.write("Pacote de Exercicio 01 - Exercicio 06");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 06");

var salario, gratificao, imposto;
const grat = 0.05;
const imp = 0.07;

salario = parseFloat(prompt("Digite o salario"));

gratificao = salario * grat;
imposto = salario * imp;

salario = (salario + gratificao) - imposto;
document.write("Salario a receber: ", salario);
document.write("<br>");
document.write("<br>");
console.log("Salario a receber: ", salario);