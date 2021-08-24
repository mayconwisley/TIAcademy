/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Sabe-se que:
    1 pé = 12 polegadas;
    1 jarda = 3 pés;
    1 milha = 1760 jardas;
    Faça um programa que receba uma medida em pés, faça as conversões a seguir e
    mostre os resultados.
    a) polegadas;
    b) jardas;
    c) milhas.
*/
document.write("Pacote de Exercicio 01 - Exercicio 15");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 15");

const cPe = 12, cJarda = 3, cMilha = 1760;

var jarda, pes, polegada, milha;

pes = parseFloat(prompt("Insira a medida em pés"));

polegada = pes * cPe;
jarda = pes / cJarda;
milha = jarda / cMilha;

document.write("Polegadas: ", polegada);
document.write("<br>");
document.write("Jardas: ", jarda);
document.write("<br>");
document.write("Milhas: ", milha);

console.log("Polegadas: ", polegada);
console.log("Jardas: ", jarda);
console.log("Milhas: ", milha);