// Data types of javascript summary
// -----------------------------------------------------
// -----------------------------------------------------

// 2 Types Of DataType

// 1 --- Premitive
// --> String --> // "" , 'myName'
// --> Null --> Is ka matlab he ke "Empty" (خالی)
// --> Boolean --> True/False
// --> Number --> 123/132
// --> Undefined --> iska matlab he ke apne space/varieble to banaliya lekin is ke andar kuch store nhi kiya
// -->  Symbol --> kisi bhi value ko unique banane ke liye symBol use hota h.
// --> BigInt --> Koi Scientific Value / Bohot Barii Value e.g. - 001.32321 - is value ko BigInt kehte he

// -----------------------------------------------

// 2 --- Non-Premitive ("Reference")

// Ye Value wo he jinka reference hamein memory me bayan kiya jaskta he

// Premitive Type ke Ilawa Baki Jitne Bhi DataType He Use Ham Non-Premetive keh skte he  -- e.g.

// Array --> [1,2,3,4,5,6,7,8]

// Object --> var abc = {
//     myName : 'Qitmeer Raza',
//     myFather : 'Muhammad Iqbal'
// }
// console.log(abc.myName);

// Function
// function learning(){
//     console.log('Hello World');
// }
// learning()

// -----------------------------------------------

// Q. JavaScript Dynamically Type Language he Ya Statically Type Language He?

// JavaScript ek dynamically typed language hai, matlab ki variable types runtime par decide hote hain, aur aapko variable ka data type explicitly declare karne ki zarurat nahi hoti. JavaScript mein aap ek variable ko alag-alag types ke values assign kar sakte hain bina kisi problem ke.

// Dusri taraf, statically typed languages, jaise ki Java ya C++, require karte hain ki aap variable ke type ko explicitly declare karein, aur ye types compile-time par check kiye jaate hain. Jab aap ek variable ko ek certain type ke saath declare karte hain, to bina explicit type conversion ke aap usmein kisi aur type ka value assign nahi kar sakte.

// Toh saral shabdon mein kaha jaye toh, JavaScript ek dynamically typed language hai, jahan variable types runtime par decide hote hain. Statically typed languages mein aapko variable types ko declare karna padta hai, aur ye types compile-time par check hote hain.

// Example 

// const score = 100 // Ye JS khud batata he ke ye number he hamein batane nhi padta ke iski type kya he.

// const winner = false // Ye bhi JS khud batata he ke ye boolean he hamein batane nhi padta ke iski type kya he.

// let id = Symbol(123);
// let anotherid = Symbol(123);

// Agar Ham Dono Symbol ki value same likhdete he To browser uski value change krdeta he kyuke Symol Unique hota he

// console.log(id === anotherid); // False
// console.log(typeof(id)); // Symbol
// console.log(typeof(anotherid)); // Symbol

// const BigInt = 12333221222221n
// console.log(typeof(BigInt));

// Arrays Example

const heros = ["Hazrat Muhammad (P.B.U.H)", "Umer Bin Khattab (R.A)", "Ali bin Abi Talib (R.A)", "Tariq Bin Ziyad", "Harun al-Rashid", "Mahmud of Ghazni"]

// Objects Example

const aboutMe = {
    name: 'Qitmeer Raza',
    fatherName: 'Muhammad Iqbal',
    age: 16,
    Party: 'Pakistan Tehreek-e-Insaf',
}

// function Example

function myFunction (){
    console.log('Hello World');
}

// How To Find Type Of Any Varieble 

// first create Varieble & Copy Varieble name

let myName = 'raza'
console.log(typeof myName); // string

console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"

// Undefined	"undefined"
// Null	"object" (reason)
// Boolean	"boolean"
// Number	"number"
// BigInt	"bigint"
// String	"string"
// Symbol	"symbol"
// Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
// Any other object	"object"

// -----------------------------------------------

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object