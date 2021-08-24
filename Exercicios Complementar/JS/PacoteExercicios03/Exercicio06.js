/*
    Desenvolva um algoritmo que peça para que o usuário informe a base e a altura de um
    retângulo, e um terceiro número inteiro "op". Caso o usuário escolha "op" igual a 0,
    calcule e mostre o perímetro do retângulo. Caso o usuário insira um valor 1 para "op",
    calcule e mostre a área do retângulo. Se o usuário inserir um valor diferente de 0 e 1
    para "op", mostrar a mensagem "Opção inválida.".
*/

var base, altura, calculo, op;

base = parseFloat(prompt("Digite a base"));
altura = parseFloat(prompt("Digite a altura"));

op = parseInt(prompt("Opções de processamento\n\n0 - Para calcular o perimetro\n1 - Para calcular a área"));
switch (op) {
    case 0:
        calculo = 2 * altura + 2 * base;
        document.write("Perimetro: ", calculo);
        document.write("<br>");
        document.write("<br>");
        console.log("Perimetro: ", calculo);
        break;
    case 1:
        calculo = altura * base;
        document.write("Area: ", calculo);
        document.write("<br>");
        document.write("<br>");
        console.log("Area: ", calculo);
        break;

    default:
        document.write("Tipo Invalido");
        document.write("<br>");
        document.write("<br>");
        console.log("Tipo Invalido");
        break;
}