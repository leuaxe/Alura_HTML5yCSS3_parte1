var frase = "bienvenidos";
var frase2 = "";

/*e => enter
  i -> imes
  a -> ai
  o -> ober
  u -> ufat*/

var inicio = 0;

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
            frase2 += frase.substring(inicio, index);
            frase2 += "mes";
            inicio = index;
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