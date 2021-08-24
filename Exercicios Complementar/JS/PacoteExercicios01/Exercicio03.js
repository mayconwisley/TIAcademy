/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba três notas e
    seus respectivos pesos, calcule e mostre a média ponderada dessas notas.
*/
document.write("Pacote de Exercicio 01 - Exercicio 03");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 03");

var nota1, peso1, nota2, peso2, nota3, peso3, media;
nota1 = parseFloat(prompt("Digite a 1º Nota"));
peso1 = parseFloat(prompt("Digite a 1º Peso"));
nota2 = parseFloat(prompt("Digite a 2º Nota"));
peso2 = parseFloat(prompt("Digite a 2º Peso"));
nota3 = parseFloat(prompt("Digite a 3º Nota"));
peso3 = parseFloat(prompt("Digite a 3º Peso"));

media = (nota1 + nota2 + nota3) / (peso1 + peso2 + peso3);

document.write("A media ponderada é: ", media);
document.write("<br>");
document.write("<br>");
console.log("A media ponderada é: ", media);