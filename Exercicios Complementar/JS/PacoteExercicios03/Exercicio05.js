/*
    Desenvolva um algoritmo que simule uma calculadora. Você deve dar a opção de o
    usuário escolher entre: 1 - Somar; 2 - Subtrair; 3 - Multiplicar; 4 - Dividir. O usuário só
    conseguirá processar dois números inteiros por vez.
*/

var valorA, valorB, opcao, total;

opcao = parseInt(prompt("Digite uma operação\n\n1 - Soma\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir"));
valorA = parseInt(prompt("Digite o valor A"));
valorB = parseInt(prompt("Digite o valor B"));

switch (opcao) {
    case 1:
        total = valorA + valorB;
        document.write("Soma: ", total);
        document.write("<br>");
        document.write("<br>");
        console.log("Soma: ", total);
        break;
        case 2:
        total = valorA - valorB;
        document.write("Subtração: ", total);
        document.write("<br>");
        document.write("<br>");
        console.log("Subtração: ", total);
        break;
        case 3:
        total = valorA * valorB;
        document.write("Multiplicão: ", total);
        document.write("<br>");
        document.write("<br>");
        console.log("Multiplicão: ", total);
        break;
        case 4:
        total = valorA / valorB;
        document.write("Divisão: ", total);
        document.write("<br>");
        document.write("<br>");
        console.log("Divisão: ", total);
        break;
    default:
        document.write("Tipo inválido");
        document.write("<br>");
        document.write("<br>");
        console.log("Tipo inválido");
        break;
}
