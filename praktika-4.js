/* 4. Parašyti f-ją, kuriai būtų paduodami du parametrai (skaičiai), ir f-ja gražintų true  jei dviejų skaičių
sumą yra mažiau arba lygų 100 ir false jei daugiau už 100. 
*/

console.clear();

function palyginimas (a, b) {
    const suma = a + b;
    if (suma <= 100){
    return true;
    } else {
        return false;
    }
}

const sk1 = 3;
const sk2 = 77;

console.log(palyginimas(sk1,sk2));
