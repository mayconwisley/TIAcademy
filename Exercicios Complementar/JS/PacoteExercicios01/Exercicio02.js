/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba três notas,
    calcule e mostre a média aritmética entre elas.
*/
document.write("Pacote de Exercicio 01 - Exercicio 02");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 02");

var nota1, nota2, nota3, media;
nota1 = parseFloat(prompt("Digite a 1º Nota"));
nota2 = parseFloat(prompt("Digite a 2º Nota"));
nota3 = parseFloat(prompt("Digite a 3º Nota"));

media = (nota1 + nota2 + nota3) / 3;

document.write("A media das notas é: ", media);
console.log("A media das notas é: ", media);