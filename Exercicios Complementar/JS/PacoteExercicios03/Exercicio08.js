/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba três notas de
    um aluno, calcule e mostre a média aritmética e a mensagem que segue a tabela abaixo.
    Para alunos de exame, calcule e mostre a nota que deverá ser tirada no exame para
    aprovação, considerando que a média no exame é 6,0.

    Média aritmética Mensagem
    0,0 ~ 3,0 Reprovado
    3,0 ~ 7,0 Exame
    7,0 ~ 10,0 Aprovado
*/

document.write("Pacote de Exercicio 03 - Exercicio 08");
console.log("Pacote de Exercicio 03 - Exercicio 08");
document.write("<br>");
document.write("<br>");

var notaA, notaB, notaC, exame, media;

notaA = parseFloat(prompt("Nata A"));
notaB = parseFloat(prompt("Nata B"));
notaC = parseFloat(prompt("Nata C"));

media = (notaA + notaB + notaC) / 3;

if (media >= 7 && media <= 10) {
    document.write("Média: ", media);
    document.write("<br>");
    document.write("Aprovado");
    document.write("<br>");
    document.write("<br>");
    console.log("Média: ", media);
    console.log("Aprovado");
}
if (media >= 3 && media < 7) {
    exame = 12 - media;
    document.write("Média: ", media);
    document.write("<br>");
    document.write("Exame");
    document.write("<br>");
    document.write("É preciso tirar: ", exame);
    document.write("<br>");
    document.write("<br>");
    console.log("Média: ", media);
    console.log("Exame");
    console.log("É preciso tirar: ", exame);
}
if (media >= 0 && media < 3) {
    document.write("Média: ", media);
    document.write("<br>");
    document.write("Reprovado");
    document.write("<br>");
    document.write("<br>");
    console.log("Média: ", media);
    console.log("Reprovado");
}