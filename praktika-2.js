/* 2. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius(valandos) 
ir  konvertuotų valandos į sekundes, bei gražintų rezultatą
*/

console.clear();

function konvertavimas (valandos){
    sekundes= valandos * 60 * 60;
    return sekundes;
}

const val= 24;
const x= konvertavimas ( val);

console.log(x);