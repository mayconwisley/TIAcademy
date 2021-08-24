/*
    Desenvolva um algoritmo que peça ao usuário que informe os coeficientes a, b e c de
uma equação de segundo grau: ax2 + bx + c. Com base na Fórmula de Bhaskara, calcule
e mostre as raízes da respectiva equação de segundo grau.
*/

document.write("Pacote de Exercicio 03 - Exercicio 11");
console.log("Pacote de Exercicio 03 - Exercicio 11");
document.write("<br>");
document.write("<br>");

var valorA, valorB, valorC, delta, x1, x2;

valorA = parseFloat(prompt("Coeficiente A"));
valorB = parseInt(prompt("Coeficiente B"));
valorC = parseFloat(prompt("Coeficiente C"));

delta = Math.pow(valorB, 2) - (4 * valorA * valorC);

if (delta < 0) {
    document.write("Raizes imaginarias");
    document.write("<br>");
    document.write("<br>");
    console.log("Raizes imaginarias");
} else {
    x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
    x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);

    document.write("Raiz X 1: ", x1);
    document.write("<br>");
    document.write("Raiz X 2: ", x2);
    document.write("<br>");
    document.write("<br>");
    console.log("Raiz X 1: ", x1);
    console.log("Raiz X 2: ", x2);
}