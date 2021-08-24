/*Mostrar nome da variavel*/
var nome = "Maycon Wisley";
console.log("Nome: " + nome);

/*Mostrar Numeros da variavel */
var numero = 12;
console.log("Numer: " + numero);

/*Mostrar tipo da variavel */
console.log("Tipo de Variavel: " + typeof (nome));
console.log("Tipo de Variavel: " + typeof (numero));

/*contatenar valores/strings */
document.write("Idade " + numero + "<br>");

var fruta = "Laranja";
var oQue = "Doce";
console.log("Concatenação: " + fruta + " " + oQue);

var fruta1 = "Laranja";
var oQue1 = "Doce";
var tudoJunto = fruta1 + " " + oQue1;
console.log("Concatenação: " + tudoJunto);

/*Somando valores */

var valor1 = 1;
var valor2 = 2;

var total = valor1 + valor2;
document.write("Subtração: ");
document.write(valor1 - valor2);
console.log("Soma: " + valor1 + valor2);
console.log("Soma: " + total);
console.log("Soma: " + valor1 + valor2);

/* Somando string */

var valor3 = '1';
var valor4 = 2;
document.write("<br>");
document.write("Soma string: ");
document.write(valor3 + valor4);

/*Parse Int*/
var valor5 = parseInt('1');
var valor6 = 2;
document.write("<br>");
document.write("Soma: ");
document.write(valor5 + valor6);

/*Comparando valores */
var valor7 = '2';
var valor8 = 2;

var comparar = (valor7 == valor8);
var comparar2 = (valor7 === valor8)

document.write("<br>");
document.write("Comparar: ");
document.write(comparar);
document.write("<br>");
document.write("Identico: ");
document.write(comparar2);

/*resto de divisão  - Modulo*/

var valor9 = 2;
var valor10 = 3;
var resto = valor9 % valor10;
document.write("<br>");
document.write("Resto - Modulo: ");
document.write(resto);

/*Mutiplicação*/

var valor11 = 2;
var valor12 = 3;
var total = valor11 * valor12;
document.write("<br>");
document.write("Multiplicação: ");
document.write(total);
