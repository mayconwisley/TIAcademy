/*
    Desenvolva um algoritmo que emule um caixa eletrônico. O usuário deve inserir o
    valor total a ser sacado da máquina e o algoritmo deve informar quantas notas de 100,
    50, 20, 10, 5 ou 2 reais serão entregues. Deve-se escolher as notas para que o usuário
    receba o menor número de notas possível.
*/
document.write("Pacote de Exercicio 01 - Exercicio 12");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 12");

var cem, cinquenta, vinte, dez, cinco, dois, saque;

saque = parseFloat(prompt("Valor do Saque"));

cem = saque / 100;
saque = saque % 100;

cinquenta = saque / 50;
saque = saque % 50;

vinte = saque / 20;
saque = saque % 20;

dez = saque / 10;
saque = saque % 10;

cinco = saque / 5;
saque = saque % 5;

dois = saque / 2;

document.write("nº notas R$ 100,00: ", parseInt(cem));
document.write("<br>");
document.write("nº notas R$ 50,00: ", parseInt(cinquenta));
document.write("<br>");
document.write("nº notas R$ 20,00: ", parseInt(vinte));
document.write("<br>");
document.write("nº notas R$ 10,00: ", parseInt(dez));
document.write("<br>");
document.write("nº notas R$ 5,00: ", parseInt(cinco));
document.write("<br>");
document.write("nº notas R$ 2,00: ", parseInt(dois));
document.write("<br>");
document.write("<br>");

console.log("nº notas R$ 100,00: ", parseInt(cem));
console.log("nº notas R$ 50,00: ", parseInt(cinquenta));
console.log("nº notas R$ 20,00: ", parseInt(vinte));
console.log("nº notas R$ 10,00: ", parseInt(dez));
console.log("nº notas R$ 5,00: ", parseInt(cinco));
console.log("nº notas R$ 2,00: ", parseInt(dois));


