function soma() {
    var x = 1;
    var y = 2;

    console.log("Usando a função Soma: " + (x + y));
}
soma();

function somaPar(x, y) {
    var r = x + y;
    console.log("Usando função Soma com parâmetros: " + r);
}

somaPar(4, 6);

function mult(n, o) {
    var resultado = n * o;
    console.log("Multiplicação: " + resultado);
}

mult(2,10);
function pot(n,o) {
    var resultado = Math.pow(n,o);
    console.log("Potencia de " + n + " elevado a "+ o +": "+ resultado);
}
pot(2,10);

function respostaF() {
    var nome = "Maycon Wisley";
    return nome;
}

var d = respostaF();
console.log("Usando função com retorno: " + d);

/*Função sendo chamada sem precisar chamar */
(function respostaF() {
    var nome = "Maycon Wisley";
    /*alert(nome);*/
    return nome;
})();

/*Função anonima */
var f = function () {
    /*alert("Função Anonima");*/
}
f();

/*Arrow function */
var ar = ()=>{
    /*alert("Arrow Function!!");*/
}
ar();

(()=>{
    /*alert("Arrow Function!!");*/
})();
