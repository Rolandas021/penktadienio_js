/* 6. Sukurti f-ją, kuri nustatytų, kuris iš paduodamų parametrų skaičių (n1, n2) yra didesnis. 
Jei n1 didesnis gražintų tekstą "n1 skaičius didesnis", jei "n2 skaičius didesnis", 
jei skaičiai lygūs gražintų n1 lygus n2.
*/

console.clear();

function palyginimas (sk1, sk2) {
    if (sk1 > sk2){
        return sk1+ " yra didesnis skaičius ";
    } else if (sk1===sk2){
        return sk1+" abu skaičiai lygūs "+sk2;
    } else {
        return sk2+" yra didesnis skaičius ";
    }
}

const sk1 = 30;
const sk2 = 30;

console.log(palyginimas(sk1, sk2));