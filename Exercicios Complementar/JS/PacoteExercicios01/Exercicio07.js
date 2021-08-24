/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba o salário-
    base de um funcionário, calcule e mostre o seu salário a receber, sabendo-se que esse
    funcionário teve gratificação de R$ 600,00 e paga imposto de 10% sobre o salário base.
*/
document.write("Pacote de Exercicio 01 - Exercicio 07");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 07");


var salario, imposto;
const grat = 600;
const imp = 0.10;

salario = parseFloat(prompt("Digite o salario"));

imposto = salario * imp;

salario = (salario + grat) - imposto;
document.write("Salario a receber: ", salario);
document.write("<br>");
document.write("<br>");
console.log("Salario a receber: ", salario);