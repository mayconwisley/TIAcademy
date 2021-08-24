var nome = "Maycon Wisley"; // Variavel Global
let sobrenome = "Batista";

if (true) {
    console.log("Nome Variavel Global: " + nome);
    var nm = nome;
    console.log("Teste de Varialve: " + teste);
    console.log("Sobrenome variavel tipo let: " + sobrenome);
    let sn = "Batista";
}
var teste;
console.log("Nome Variavel dentro do if 'nm': " + nm);
/* console.log("Nome" + nm + " " + sm); */

var Pessoa = {
    nome : "Maycon Wisley",
    rua : "Rua Teste",
    nCasa: "777",
    dados: function(){
        document.write(
            "Nome: " + this.nome + "<br>" +
            "Rua: " + this.rua + "<br>" +
            "Num. Casa: " + this.nCasa
        )
    }
}

Pessoa.dados();
console.log("Nome: " + Pessoa.nome + " Endereço: " + Pessoa.rua + " Numero: " + Pessoa.nCasa);