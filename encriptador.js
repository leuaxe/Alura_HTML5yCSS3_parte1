var frase = "bienvenidos";
var frase2 = "";

/***/

var a = [];
var e = [];
var i = [];
var o = [];
var u = [];

for (let index = 0; index < frase.length; index++) {
    var letra = frase.charAt(index);
    switch (letra) {
        case 'a':
            a.push(index);
            break;
        case 'e':
            e.push(index);
            break;
        case 'i':
            i.push(index);
            break;
        case 'o':
            o.push(index);
            break;
        case 'u':
            u.push(index);
            break;
    }
}

console.log(a);
console.log(e);
console.log(i);
console.log(o);
console.log(u);