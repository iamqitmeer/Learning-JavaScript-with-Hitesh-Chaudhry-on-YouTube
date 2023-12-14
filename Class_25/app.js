// High Order Array loops
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

// Let's Create Array
const muslimHeroes = [
  "Salahuddin Ayyubi",
  "Ibn Battuta",
  "Malala Yousafzai",
  "Muhammad Ali",
  "Al-Farabi",
  "Khawarizmi",
  "Maryam Mirzakhani",
  "Abdus Sattar Edhi",
  "Fatima al-Fihri",
  "Tariq ibn Ziyad",
];

// Let's Create Array OF Object

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Raza", age: 60 },
  { name: "Malik", age: 35 },
  { name: "Zohra", age: 45 },
];

// Let's Create Object

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// ForOf Loop In Javascript
// --------------------------------------------------------

// JavaScript me "for of" loop ka upayog iterable objects ke saath kisi sequence ke liye iterate karne ke liye hota hai. Ye loop array, string, map, set, aur dusre iterable objects ke saath istemal kiya ja sakta hai.

// Syntax:

// ```javascript
// for (variable of iterable) {
// Code to be executed in each iteration
// }
// ```

// Yahan, `variable` ek naya variable hai jo har iteration me iterable object ke ek element ko represent karega. `iterable` ek aisa object hai jise aap iterate karna chahte hain.

// Example:

// ```javascript
// Array ke saath for of loop ka istemal
// const fruits = ['Apple', 'Banana', 'Orange'];

// for (const fruit of fruits) {
//   console.log(fruit);
// }
// Output:
// Apple
// Banana
// Orange

// String ke saath for of loop ka istemal
// const message = "Hello";

// for (const char of message) {
//   console.log(char);
// }
// Output:
// H
// e
// l
// l
// o
// ```

// Is tarah se, "for of" loop ka istemal aapko har iteration me iterable object ke ek element tak pahunchne me madad karega. Ye "for of" loop "for in" loop se alag hai, jo object ke enumerable properties ke liye hota hai, jabki "for of" loop iterable objects ke liye hota hai.

// for (const i of muslimHeroes) {
//   console.log(i);
// }

// const message = "Raxza";
// for (const char of message) {
//   console.log(char);
// }

// --------------------------------------------------------
// --------------------------------------------------------

// Map In Javascript

// const map = new Map()
// map.set('PK', "Pakistan")
// map.set('IN', "India")
// map.set('FR', "France")
// map.set('TR', "Turkey")

// // console.log(map);

// for (const [key, value] of map) {
//   console.log(key, value);
// }

// ForIn Loop In Javascript
// --------------------------------------------------------
// --------------------------------------------------------

// JavaScript me, "for-in" loop ek object ke properties ya array ke elements par iterate karne ke liye istemal hota hai. Is loop ka basic syntax yeh hota hai:

// ```javascript
// for (variable in object) {
//   // code to be executed
// }
// ```

// Yahan, `variable` ek temporary variable hai jo har iteration mein current property ya element ko represent karta hai, aur `object` woh object hai jiska saath iterate kiya ja raha hai.

// Example:

// 1. Object ke saath "for-in" loop:

// ```javascript
// var person = { name: 'John', age: 30, job: 'developer' };

// for (var key in person) {
//   console.log(key + ': ' + person[key]);
// }
// ```

// Is example mein, loop har iteration mein `key` variable ko object `person` ke properties ke naam se set karta hai aur phir console par output dikhata hai.

// 2. Array ke saath "for-in" loop:

// ```javascript
// var fruits = ['apple', 'banana', 'orange'];

// for (var index in fruits) {
//   console.log(fruits[index]);
// }
// ```

// Is example mein, loop har iteration mein `index` variable ko array `fruits` ke index ke roop mein set karta hai aur phir console par output dikhata hai.

// Note: "for-in" loop ka istemal array ke elements ke liye generally recommend nahi hota hai, kyun ki yeh prototype chain ko bhi iterate kar sakta hai, jo unexpected behavior ka karan ban sakta hai. Iske bajaye, "for-of" loop ka istemal array ke liye zyada common hai.

// for (const key in person) {
// console.log(key, " -- ", person[key]);
// }

// For Each Loop in Javascript
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

// JavaScript mein "for each" loop ka upayog kisi bhi iterable object ke har ek element par iteration ke liye kiya jata hai. Is loop ka istemal kisi array, string, ya kisi aur iterable object ke saare elements par ek ek karke access karne ke liye hota hai.

// Yeh loop ek function ko lekar chalta hai jise har iteration mein call karta hai, aur us function ko current element, index, aur iterable object ke reference ke sath provide karta hai. Isse aap har ek element ke sath specific operations perform kar sakte hain.

// Yahaan ek udaharan hai jo array ke har ek element ko console par print karta hai:

// ```javascript
// var arr = [1, 2, 3, 4, 5];

// arr.forEach(function(element, index, array) {
//   console.log("Element:", element, "Index:", index, "Array:", array);
// });
// ```

// Is code mein `forEach` ek function ko accept karta hai, jise har ek element ke liye ek baar call karta hai. Yeh function teen parameters leta hai:

// 1. `element`: Current iteration mein array ka element.
// 2. `index`: Current element ka index.
// 3. `array`: Array jispar iteration ho raha hai.

// Aap is function mein kuch bhi karna chahe, jaise ki data processing, display, ya kuch aur. "for each" loop ka upayog simple aur efficient tareeke se array ke saare elements par iteration ke liye kiya ja sakta hai.

muslimHeroes.forEach((val) => {
  console.log(val);
});
