/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba o ano de
    nascimento de uma pessoa e ano atual, calcule e mostre:
    a) a idade dessa pessoa;
    b) quantos anos essa pessoa terá em 2030;
*/
document.write("Pacote de Exercicio 01 - Exercicio 16");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 16");

var anoNascimento, anoAtual;
anoNascimento = parseInt(prompt("Digite o ano de nascimento"));
anoAtual = parseInt(prompt("Digite o ano atual"));

var idade = anoAtual - anoNascimento;
var idade2030 = 2030 - anoNascimento;

document.write("Idade Atual: ", idade);
document.write("<br>");
document.write("Idade em 2030: ", idade2030);
document.write("<br>");
document.write("<br>");

console.log("Idade Atual: ", idade);
console.log("Idade em 2030: ", idade2030);
