let i = 0;
i++;
i++;
console.log(i);
i++;
i++;
i++;
console.log(i)

var arr = ["caneta", "mouse"];
console.log(`Comprimento do array é ${arr.length}`);

//For
var arr = ["caneta", "mouse", "monitor", "teclado"];
for (var inc = 0; inc < arr.length; inc++) {
    console.log(`For: ${arr[inc]}`);
}
// For in
var arr = ["caneta", "mouse", "monitor", "teclado"];
for (let idx in arr) {
    console.log(`For In: ${idx}`);
}

//For of
var arr = ["caneta", "mouse", "monitor", "teclado"];
for (let idx of arr) {
    console.log(`For Of: ${idx}`);
}

//While

var x = 0;
while (i < 10) {
    console.log(`While: ${i}`);
    i++
}

//Do While

do {
    n = prompt("Digite zero", "0");
    if (n != 0) {
        alert("Diferente de zero");
    }
} while (n != 0);
