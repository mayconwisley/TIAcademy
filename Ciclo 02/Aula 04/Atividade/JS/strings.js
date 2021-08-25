var nome = "Teste";
console.log(nome.length);
console.log(nome[0]);

//match

var palavra = "Maçã doce";
console.log(palavra.match(/D/gi));

//Search
console.log(palavra.match(/D/gi));

//Replace

var str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero maxime eveniet, quis praesentium officia quam omnis pariatur nesciunt nihil officiis laudantium tempora atque, accusamus soluta harum? Quisquam assumenda magni culpa.";

var mudarStr = str.replace(/e/gi, 'X');

console.log(mudarStr);

//LocaleCompare
var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();

var comparacao = c1.localeCompare(c2);
console.log(comparacao);

//trim()

var p = '   fpalavra+   ';
var r = p.trim();
console.log(r);
var s = r.replace(/f/gi,'');
console.log(s);
sub_a = s.replace('+','');
console.log(`Removido: ${sub_a}`);

//localeString

var valor = 1.35
var formatarMoeda = valor.toLocaleString('pt-BR', {style:'currency', currency:'brl'});
console.log(formatarMoeda);