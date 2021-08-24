var frutas = ["Uva", "Banana", "Amora", "Melão"];
var frutas2 = ["Maçã", "Pera", "Laranja"];
var frutas3 = ["Teste", "Teste2", "Teste3"]
//Concat
var todasAsFrutas = frutas.concat(frutas2).concat(frutas3);

console.log(`Frutas: ${frutas}`);
console.log(`Todas as Frutas: ${todasAsFrutas}`);

//IndexOf
var retornoIndexOf = todasAsFrutas.indexOf("Amora");;
console.log(`IndexOf de Amora: ${retornoIndexOf}`);

//Join
var strArray = todasAsFrutas.join();
console.log(strArray);

//Push
var lsPush = ["Bola", "Peteca"];
var nlsPush = lsPush.push("Teste", "Teste2");
console.log(`Push: ${lsPush}`);

//Pop

console.log(`Pop: ${lsPush.pop()}`);

// Reverse
console.log(`Reverse: ${lsPush.reverse()}`);

//Shift
var lsShif = ["Fusca", "Variante"];
lsShif.shift();
console.log(`Shift: ${lsShif}`);

//Sort
var lsSort = ["z", "a", "v", "n"]
lsSort.sort();

console.log(`Sort: ${lsSort}`);

//ToString

//UnShift
lsSort.unshift("d");
console.log(lsSort);

//splice

var lsSplice = ["Uva", "Banana", "Amora", "Melão"];
lsSplice.splice(1, 2);
console.log(`Splice: ${lsSplice}`);

//Array Objetos
var dado = [
    { nome: "Teste1", sobreNome: "Teste3" },
    { nome: "Teste2" }
];
console.log(dado[0].nome)
console.log(dado[0].sobreNome)

function Pessoa2(nome, sobreNome, idade, doc = []) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
    this.doc = {
        rg: doc[0],
        cpf: doc[1]
    }
}

var ps3 = new Pessoa2("Jao", "kkk", 55, ["6545455", "87878"]);
/* console.log("Nome: ", ps3.nome, "RG: ", ps3.doc.rg); */
console.log(`Nome: ${ps3.nome} RG: ${ps3.doc.rg}`);