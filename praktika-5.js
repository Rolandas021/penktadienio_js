/*5. Parašyti f-ją, kuri nustatytų ar du paduodami argumentai yra lygūs. Gražiname true arba false
*/
console.clear();

function palyginimas (x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}

const a = 4;
const b = 8;

console.log(`Ar ${a} yra lygus ${b}?: ${palyginimas(a, b)}`);

const c = 2;
const d = 2;

console.log(`Ar ${c} yra lygus ${d}?: ${palyginimas(c, d)}`);

const e = 2;
const f = "2";

console.log(`Ar ${e} yra lygus ${f}?: ${palyginimas(e, f)}`);