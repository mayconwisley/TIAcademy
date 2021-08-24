/*
(Adaptado de ASCENCIO e CAMPOS, 2008) A nota final de um estudante é calculada a
partir de três notas atribuídas respectivamente a um trabalho de laboratório, a uma
avaliação semestral e a um exame final. A média das três notas mencionadas
anteriormente obedece aos pesos a seguir:
Nota                         Peso
Trabalho de laboratório       2
Avaliação semestral           3
Exame final                   5
Faça um programa que receba as três notas, calcule e mostre a média ponderada e o
conceito que segue a tabela abaixo:
Média ponderada Conceito
8,0 ~ 10,0        A
7,0 ~ 8,0         B
6,0 ~ 7,0         C
5,0 ~ 6,0         D
0,0 ~ 5,0         E
*/

document.write("Pacote de Exercicio 03 - Exercicio 07");
console.log("Pacote de Exercicio 03 - Exercicio 07");
document.write("<br>");
document.write("<br>");

const TL = 2, AS = 3, EF = 5;
var notaA, notaB, notaC, media;
notaA = parseFloat(prompt("Informe a nota do Trabalho de Laboratório"));
notaB = parseFloat(prompt("Informe a nota da Avaliação Semestral"));
notaC = parseFloat(prompt("Informa a nota do Exame Final"));

notaA = notaA * TL;
notaB = notaB * AS;
notaC = notaC * EF;

media = (notaA + notaB + notaC) / (TL + AS + EF);

if (media >= 8 && media <= 10) {
    document.write("Conceito A");
    document.write("<br>");
    document.write("<br>");
    console.log("Conceito A");
}
if (media >= 7 && media < 8) {
    document.write("Conceito B");
    document.write("<br>");
    document.write("<br>");
    console.log("Conceito B");
}
if (media >= 6 && media < 7) {
    document.write("Conceito C");
    document.write("<br>");
    document.write("<br>");
    console.log("Conceito C");
}
if (media >= 5 && media < 6) {
    document.write("Conceito D");
    document.write("<br>");
    document.write("<br>");
    console.log("Conceito D");

}
if (media >= 0 && media < 5) {
    document.write("Conceito E");
    document.write("<br>");
    document.write("<br>");
    console.log("Conceito E");
}

document.write("Nota A já aplicada o peso: ", notaA)
document.write("<br>");
document.write("Nota B já aplicada o peso: ", notaB)
document.write("<br>");
document.write("Nota C já aplicada o peso: ", notaC)
document.write("<br>");
document.write("<br>");

console.log("Nota A já aplicada o peso: ", notaA)
console.log("Nota B já aplicada o peso: ", notaB)
console.log("Nota C já aplicada o peso: ", notaC)
