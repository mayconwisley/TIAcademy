/*
    Jeremias possui um cronômetro que consegue marcar o tempo apenas em segundos.
    Sabendo disso, desenvolva um algoritmo que receba o tempo cronometrado, em
    segundos, e diga quantas horas, minutos e segundos se passaram a partir do tempo
    cronometrado.
*/
document.write("Pacote de Exercicio 01 - Exercicio 11");
document.write("<br>");
document.write("<br>");
console.log("Pacote de Exercicio 01 - Exercicio 11");


var segundo, minuto, hora;

segundo = parseInt(prompt("Insira o valor em Segundos: "));

hora = segundo / 3600;
segundo = segundo % 3600;
minuto = segundo / 60;
segundo = segundo % 60;

document.write("Horas:", parseInt(hora));
document.write("<br>");
document.write("Minutos:",parseInt(minuto));
document.write("<br>");
document.write("Segundos:", parseInt(segundo));
document.write("<br>");
document.write("<br>");

console.log("Horas:", parseInt(hora));
console.log("Minutos:", parseInt(minuto));
console.log("Segundos:", parseInt(segundo));