/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba um número
    positivo e maior que zero, calcule e mostre:
    a) o número digitado ao quadrado;
    b) o número digitado ao cubo;
    c) a raiz quadrada do número digitado;
    d) a raiz cúbica do número digitado.
*/
document.write("Pacote de Exercicio 01 - Exercicio 13");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 13");

var num, quadrado, cubico, raizQuadrada, raizCubica;

num = parseFloat(prompt("Insira um numero"));

if (num <= 0) {
    document.write("Numero inválido");
    document.write("<br>");
    document.write("<br>");
}
else {
    quadrado = Math.pow(num, 2);
    cubico = Math.pow(num, 3);
    raizQuadrada = Math.sqrt(num)
    raizCubica = Math.pow(num, 1 / 3);
}

document.write("Quadrado: ", quadrado);
document.write("<br>");
document.write("Cubo: ", cubico);
document.write("<br>");
document.write("Rais Quadrada: ", raizQuadrada);
document.write("<br>");
document.write("Raiz Cubica: ", raizCubica);
document.write("<br>");
document.write("<br>");

console.log("Quadrado: ", quadrado);
console.log("Cubo: ", cubico);
console.log("Rais Quadrada: ", raizQuadrada);
console.log("Raiz Cubica: ", raizCubica);
