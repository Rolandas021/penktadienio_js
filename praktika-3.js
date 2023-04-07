/* 3. Parašyti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius, 
antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių. 
Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių.
*/

console.clear();

function taskai(baudos, dvitaskiai, tritaskiai) {
    let suma = 0;
    suma = baudos + (dvitaskiai * 2) + (tritaskiai * 3);
    return suma;
}

const a = 5;
const b = 25;
const c = 10;

console.log(`Rezultatas: ${taskai(a, b, c)}`)