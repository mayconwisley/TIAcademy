/*
    (Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que mostre o menu de
    opções a seguir, receba a opção do usuário e dos dados necessários para executar cada
    operação. Suponha que o usuário não irá inserir valores inválidos.
    Menu de opções:
    1. Somar dois números
    2. Raiz quadrada de um número
*/

document.write("Pacote de Exercicio 03 - Exercicio 13");
console.log("Pacote de Exercicio 03 - Exercicio 13");
document.write("<br>");
document.write("<br>");

var valorA, valorB, calculo, opcao;

opcao = parseInt(prompt("Digite uma opção\n\n1 - Somar dois numeros\n2 - Raiz quadrada de um numero"));

switch (opcao) {
    case 1:
        valorA = parseFloat(prompt("Digite um valor A"));
        valorB = parseFloat(prompt("Digite um valor B"));
        calculo = valorA + valorB;

        document.write("Resultado da Soma: ", calculo);
        document.write("<br>");
        document.write("<br>");
        console.log("Resultado da Soma: ", calculo);
        break;
    case 2:
        valorA = parseFloat(prompt("Digite um valor"));
        
        calculo = Math.sqrt(valorA);

        document.write("Resultado da Raiz quadrada: ", calculo);
        document.write("<br>");
        document.write("<br>");
        console.log("Resultado da Raiz quadrada: ", calculo);
        break;

    default:
        break;
}