/*1. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
padidinamas vienetu ir gražinamas rezultatas
*/

console.clear();

function padidinti(skaicius) {
    skaicius = skaicius +1;
    return skaicius;
}

const sk = -3;
const sk2 = padidinti(sk);
console.log(sk2)