// Filter map and reduce in javascript
// ---------------------------------------------------
// ---------------------------------------------------


let muslimHeroes = [
  "Salahuddin Ayyubi",
  "Malala Yousafzai",
  "Muhammad Ali",
  "Imam Al-Ghazali",
  "Fatima al-Fihri",
  "Bilal ibn Rabah",
  "Al-Farabi",
  "Sultan Mehmed II",
  "Rumi",
  "Ibn Battuta",
];

// ---------------------------------------------------
// ---------------------------------------------------

// ForEach Loop
// ---------------------------------------------------

// Haan, `forEach` ek JavaScript loop hai jo array ke har element par ek function ko apply karta hai. Is loop ka istemal kisi array ke saare elements ko iterate karne ke liye hota hai. Yeh ek concise tareeka hai array elements par operations perform karne ka. Yeh loop immutable hota hai, iska matlab hai ki isse array modify nahi hota.

// Yeh ek simple example hai `forEach` loop ka istemal karne ka:

// ```javascript
// let numbers = [1, 2, 3, 4, 5];

// // forEach loop ka istemal
// numbers.forEach(function(element) {
//   console.log(element);
// });

// // Ya phir arrow function ka istemal bhi kiya ja sakta hai
// numbers.forEach(element => console.log(element));
// ```

// Is example mein `forEach` loop `numbers` array ke har element par ek function ko call karta hai, jismein wo element print hota hai.

// `forEach` ka syntax kuch is tarah hai:

// ```javascript
// array.forEach(function(currentValue, index, array) {
//   // your code here
// });
// ```

// - `currentValue`: Current element of the array being processed.
// - `index`: Current index of the element being processed.
// - `array`: The array `forEach` was called upon.

// Aap apne use case ke according in parameters ka istemal kar sakte hain ya unme se kuch ko ignore bhi kar sakte hain, agar aapko unki zarurat nahi hoti.

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// Filter in JS
// ---------------------------------------------------

// JavaScript me "filter" ek array method hai, jo ek array ko filter karke naya array banaata hai, jismein sirf woh elements shamil hote hain jo diye gaye condition ko satisfy karte hain. Is method ka basic syntax is tarah hota hai:

// ```javascript
// let newArray = array.filter(callback(element[, index[, array]])[, thisArg])
// ```

// Yahan,

// - `array`: Original array hai, jise filter karna hai.
// - `callback`: Ek function hai, jo har array element par apply hoti hai. Is function ko teen parameters milte hain: `element` (current array element), `index` (current element ka index), aur `array` (original array).
// - `thisArg` (optional): Ek optional parameter hai, jo callback function ke andar "this" keyword ki value ke roop mein kaam karta hai.

// Yeh ek udaharan dekhein:

// ```javascript
// // Original array
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Filter out even numbers
// let filteredNumbers = numbers.filter(function(element) {
//   return element <= 6;
// });

// console.log(filteredNumbers); // Output: [1, 3, 5, 7, 9]
// ```

// Is example mein, `filter` method ka use kiya gaya hai to odd numbers ko select karne ke liye. Callback function har element par lagatar apply hoti hai, aur jo elements condition ko satisfy karte hain, woh naye array mein shamil ho jaate hain.


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let secArr = num.filter((number) => {
//   return number <= 5;
// });

// console.log(secArr);


// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// Immutable aur mutable Difference
// ---------------------------------------------------
// Immutable aur mutable do programming concepts hain, jo data ke saath kaise deal kiya jata hai, aur in dono me kuch farq hain.

// 1. **Mutable (Changeable):**
//    - Mutable data structures mein, aap data ko modify kar sakte hain.
//    - Jab aap kisi value ko change karte hain, to woh original value directly affect hoti hai.
//    - Examples of mutable data structures include arrays, objects, etc.

//    Example (JavaScript array as mutable):

//    ```javascript
//    let mutableArray = [1, 2, 3];
//    mutableArray[0] = 99;
//    console.log(mutableArray); // Output: [99, 2, 3]
//    ```

// 2. **Immutable (Unchangeable):**
//    - Immutable data structures mein, original data ko change nahi kiya ja sakta.
//    - Instead, jab bhi aap kisi value ko change karte hain, to ek naya copy banata hai aur usme changes hoti hain, jabki original data as it is rehta hai.
//    - Examples of immutable data structures include strings, numbers, and tuples.

//    Example (JavaScript string as immutable):

//    ```javascript
//    let immutableString = "Hello";
//    let newString = immutableString + " World";
//    console.log(immutableString); // Output: Hello
//    console.log(newString); // Output: Hello World
//    ```

//    Immutable data structures ke kuch advantages hote hain jaise ki code predictability, concurrency safety, aur debugging me help karta hai. Lekin iska downside yeh hai ki jab aap large data sets par kaam karte hain, to isme changes karne ke liye naye copies banane ke wajah se performance ka khatra ho sakta hai.

// Is tarah se, mutable aur immutable concepts ek data ko modify karne ke tareeke ko represent karte hain, aur aap inme se kisi ko choose kar sakte hain aapke specific use case ke mutabiq.

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// Map In JS
// ---------------------------------------------------

// "map" ek JavaScript method hai jo Arrays ko iterate (chakkar lagana) karke har ek element ke liye ek naya array banata hai. Is method ka upayog kisi function ko apply karne ke liye kiya jata hai, jisse ek naya array banaya ja sake.

// Yeh ek example hai:

// ```javascript
// // Original array
// var numbers = [1, 2, 3, 4, 5];

// // Map function to square each element
// var squaredNumbers = numbers.map(function(num) {
//   return num * num;
// });

// // Output: [1, 4, 9, 16, 25]
// console.log(squaredNumbers);
// ```

// Is example mein, `map` method use kiya gaya hai `numbers` array ke har ek element ko square karne ke liye. Function, jo `map` ke andar pass kiya gaya hai, har ek element ko square karke naya array banata hai, jise `squaredNumbers` mein store kiya gaya hai.

// Aap ek function ke alawa arrow function ka bhi istemal kar sakte hain, jisse syntax thoda sa concise ho jata hai:

// ```javascript
// var squaredNumbers = numbers.map(num => num * num);
// ```

// `map` method bahut hi flexible hai aur aap ise alag-alag tarike se upayog kar sakte hain, depend karta hai ki aap kis tarah ke transformation karna chahte hain.

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------


// ---------------------------------------------------
