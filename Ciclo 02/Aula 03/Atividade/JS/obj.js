function Pessoa(nome, sobreNome, idade) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
}

var ps1 = new Pessoa("Teste", "Qualquer", 50);
var ps2 = new Pessoa("Outra pessoa");

var objPessoa = {
    rg: "777",
    cpf: "556"

};

function Pessoa2(nome, sobreNome, idade) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
    this.doc = {
        rg:"423",
        cpf:"0099"
    }
}

var ps3 = new Pessoa2("Jao","kkk", 55);


console.log("Nome: ", ps1.nome, " ", ps1.sobreNome, "Idade: ", ps1.idade);
console.log("Nome: ", ps2.nome, " ", ps2.sobreNome, "Idade: ", ps2.idade);
console.log(objPessoa);
console.log("RG: ", objPessoa.rg);
console.log("Nome: ", ps3.nome, "RG: ", ps3.doc.rg);

console.log(`Nome: ${ps3.nome} RG: ${ps3.doc.rg}`);