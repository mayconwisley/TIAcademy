var nome = prompt("Digite seu nome: ","Digite seu nome aqui");
var numero = prompt(nome + ", digite um numero: ","Digite um numero aqui");
var converterNumero = parseInt(numero);

var numero1 = 20;

var retorno = (numero1 === numero)
var retorno2;

var soma = converterNumero + numero1;
var subtracao = numero - numero1;
var resto = numero % numero1;
var quadrado = numero * numero;

if ((numero === converterNumero) == false) {
    alert("Numero informado é uma string(texto)!!");
    alert("Vamos converter o numero informado para o tipo numero");
}

if (typeof (converterNumero) === typeof (numero1)) {
    retorno2 = true;
}
document.write("Desafio Aula 1 <br>");
document.write("01 - Seja bem vindo: " + nome + "<br>");
document.write("02 - Você digitou o numero: (" + numero + ") <br>");
document.write("03 - O retorno da comparação booleana é: " + retorno + "<br>");
document.write("04 - A Soma dos valores é: " + soma + "<br>");
document.write("05 - A Subtração dos valores é: " + subtracao + "<br>");
document.write("06 - O Resto da divisão é de: " + resto + "<br>");
document.write("07 - O quadrado do numero digitado é: " + quadrado + "<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
var op;

op = prompt("Escolha uma fruta!\n\nDigite um numero\n\n1 - Manga\n2 - Maracuja\n3 - Melancia\n4 - Laranja", "Digite aqui o numero escolhido");
op = parseInt(op);

document.write("Desafio Aula 2 <br>");
document.write("01 - Numero digitado convertido para o tipo numerico: ", converterNumero + "<br>");
document.write("02 - O retorno Após conversão de tipo é: " + retorno2 + "<br>");

switch (op) {
    case 1:
        document.write("Você escolheu a fruta Manga. <br>");
        break;
    case 2:
        document.write("Você escolheu a fruta Maracuja. <br>");
        break;
    case 3:
        document.write("Você escolheu a fruta Melancia. <br>");
        break;
    case 4:
        document.write("Você escolheu a fruta Laranja. <br>");
        break;

    default:
        document.write("A fruta escolhida não esta na lista!");
        break;
}
