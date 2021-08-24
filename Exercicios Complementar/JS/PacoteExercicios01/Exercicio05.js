/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba o salário de
    um funcionário e o percentual de aumento, calcule e mostre o valor do aumento e o
    novo salário.
 */
    document.write("Pacote de Exercicio 01 - Exercicio 05");
    document.write("<br>");
    document.write("<br>");
    console.log("Pacote de Exercicio 01 - Exercicio 05");
    

    var salario, porc;
    
    salario = parseFloat(prompt("Digite o valor do salario"));
    porc = parseFloat(prompt("Digite o Percentual do aumento"));
    porc = salario * (porc / 100);
    salario = salario + porc;
    
    document.write("Novo Valor do aumento R$: ", porc);
    document.write("<br>");
    document.write("Novo salario R$: ", salario);
    document.write("<br>");
    document.write("<br>");
    console.log("Novo Valor do aumento R$: ", salario);
    console.log("Novo salario R$: ", salario);