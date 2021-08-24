var nome = prompt("Digite seu nome: ");
var numero = prompt(nome + ", digite um numero: ");

numero = parseInt(numero);

var numero1 = 20;

var retorno = (numero1 == numero)

var soma = numero + numero1;
var subtracao = numero - numero1;
var resto = numero % numero1;
var quadrado = numero * numero;

document.write("01 - Seja bem vindo: " + nome + "<br>");
document.write("02 - Você digitou o numero: (" + numero + ") <br>");
document.write("03 - O retorno da comparação booleana é: " + retorno + "<br>");
document.write("04 - A Soma dos valores é: " + soma + "<br>");
document.write("05 - A Subtração dos valores é: " + subtracao+ "<br>");
document.write("06 - O Resto da divisão é de: " + resto+ "<br>");
document.write("07 - O quadrado do numero digitado é: " + quadrado+ "<br>");





