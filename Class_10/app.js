// Number and Maths in Javascript

// ------------------------------------------
// Number In Javascript

// let score = 400;
// console.log(score);

// Yaha Par Javascript ne Automatically Detect Kiya He ke ye Number He... Lekin Kayi Baar Hamein Apni Marzi se Varieble ki Datatype Deni ho ti he iske Liye Ham Likhte he.

// let balance = new Number(200);
// console.log(balance); // Yaha Pe Bata rahe he Number. OR Sath iski prototype bhi de raha he ke agar kuch properties iske saaath lagani hoto.

// console.log(balance.toString()); // Ab ye Convert Ho gaya he string me
// console.log(typeof balance); //  ab ye iska Object deraha he

// let myNum = 4000.544322;
// console.log(myNum.toFixed(2)); // kabhi kabhi ham multiplication value nikaalte waqt hamare precision value bohot bari ho jatii he. obviously client ko itni barii precision value nhii chahiye Hoti. to iske liye ham .toFixed() use krte he. kyu ke ye point ke baad hamare marzi se precision age barhayega. .toFixed(2) // ye 2 baar barhaeiGa

// myNum me Value Bohot Badii He decimal se pehlee bhi OR baad me bhi agar ham chahte he ke apni marzii se value lana to iske Liye ham  .toPrecision() use krte he . isme hamein 1 to 21 tk value de skte he.

// console.log(myNum.toPrecision(2)); // 4.0e+3

// let Create New Varieble

// let myValueisHundreds = 1000000; // ab isme bohot zyadaa 0 lage hue he. ise dekhna bohot zyadaa dificult hota he. to issliye ham use krte he. agaar ham round bracket ke andar ( en-IN ) matlab indian vlue likh de to ye India ke Hisaab se bataeinGa

// console.log(myValueisHundreds.toLocaleString('en-PK')); // Ans Is 1,000,000

// ------------------------------------------
// ------------------------------------------
// Math In Javascript

// Math Library JS ke sath ati he By Default Bohot Powerfull Library He ye

// console.log(Math); // IsKo bhi ham Number ki Tarah likh skte he. iski bhi Numbe Or string jesi Bohot zyadaa propoerties hoti he

// console.log(Math.abs(-4)); // kayi baar hamein negattive value milti he jo ham nhi chate he ke ye hoo. to ham iskO hataane ke kiye use krte he Math.abs(-4) // ye isko convert krde ga positive me Aisa Nhi he ke negative positive ho jata he positive negative. aisa nhii he sirf negative positive hota he

// console.log(Math.round(4.3)); // ab kayi baar hamare paas value hoti he decimal me lekin ham chahte he ke ye round off hojaye he matlab decimal ke sat round off ho jaye. to iske liye ham use krte he Math.round(andar Hamein Number denii he)

// console.log(Math.ceil(4.3)); // agar ham chahte he control krna ke value Upper wali Choose hogi ya Lower wali to ham use krte he .ceil (Mtlab top to Top wala number hi choose kreGA). Matlab decimal ke baad wala number zara sa bhi bara hua to ye decimal se pehle wala number me increament kreGa

// console.log(Math.floor(4.3)); // ye lowest value leta he.

// console.log(Math.min(3,4,5,5,6,6,3,5,6,8,7,22,2,3,4,4,5,6,7,8,7,5,4,33,)); // ye choti value nikal dega

// console.log(Math.max(3,4,5,5,6,6,3,5,6,8,7,22,2,3,4,4,5,6,7,8,7,5,4,33,)); // ye badi value nikal dega

console.log(Math.random() * 10); // ye random value deta he. hamesha 0 se 1 ke beech me. agar ham badi value chahte he. to is ke liye ham use krte he  Math.random() ke baad * krdenge ham koi bhi badii value se

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (min - max + 1)) + min);
console.log(Math.floor(Math.random() * (min - max + 1)) + min);
