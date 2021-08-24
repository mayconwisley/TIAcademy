/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba três números
    distintos e mostre-os em ordem crescente.
*/
document.write("Pacote de Exercicio 03 - Exercicio 09");
console.log("Pacote de Exercicio 03 - Exercicio 09");
document.write("<br>");
document.write("<br>");

var valorA, valorB, valorC;

valorA = parseInt(prompt("Digite o valor A"));
valorB = parseInt(prompt("Digite o valor B"));
valorC = parseInt(prompt("Digite o valor C"));

if(valorA < valorB && valorA < valorC) {
    if(valorB < valorC){
        document.write(valorA, " - ", valorB, " - ", valorC);
        document.write("<br>");
        document.write("<br>");
        console.log(valorA, " - ", valorB, " - ", valorC);
    }
    else{
        document.write(valorA, " - ", valorC, " - ", valorB);
        document.write("<br>");
        document.write("<br>");
        console.log(valorA, " - ", valorC, " - ", valorB);
    }

}
if(valorB < valorA && valorB < valorC) {
    if(valorA < valorC){
        document.write(valorB, " - ", valorA, " - ", valorC);
        document.write("<br>");
        document.write("<br>");
        console.log(valorB, " - ", valorA, " - ", valorC);
    }
    else{
        document.write(valorB, " - ", valorC, " - ", valorA);
        document.write("<br>");
        document.write("<br>");
        console.log(valorB, " - ", valorC, " - ", valorA);
    }

}
if(valorC < valorA && valorC < valorB) {
    if(valorA < valorB){
        document.write(valorC, " - ", valorA, " - ", valorB);
        document.write("<br>");
        document.write("<br>");
        console.log(valorC, " - ", valorA, " - ", valorB);
    }
    else{
        document.write(valorC, " - ", valorB, " - ", valorA);
        document.write("<br>");
        document.write("<br>");
        console.log(valorC, " - ", valorB, " - ", valorA);
    }
}
