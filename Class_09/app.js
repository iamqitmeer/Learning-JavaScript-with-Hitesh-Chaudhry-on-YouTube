// String In JavaScript

let value1 = 'Qitmeer Raza'
let value2 = 'Muhammad Iqbal'
let value3 = 'Class 11TH'
let value4 = 'Thanks.'

console.log(value1,value2);
console.log(`${value1} ${value2}`);

console.log(`Hello I am ${value1}, My Father Name is ${value2}, I am Student in ${value3}. ${value4}`)

const myName = new String('Qitmeer Raza')

console.log(myName.__proto__);
console.log(myName.length); // ye iski Lenght Btaeiga
console.log(myName.toUpperCase()); // ye isko Upper Case me convert krdega
console.log(myName.toLowerCase()); // ye isko Lower Case me convert krdega
console.log(myName.charAt(2)); // ye isko agar ham index value denge to ye hamein is index pe konsa character betha he btadega
console.log(myName.indexOf('t')); // ye isko agar ham koi bhi character denge to ye hamein is index value btadega
const newString = myName.substring(1,4)
console.log(newString); // iska matlab ye he ke agar hamein apne string ko todna hoto. e.g. mjhe "myName" String ke sirf start ke 4 character chahiye to me sub string lagaoonga . Note Substring 2 arguement accept krta he pehla starting value OR Ending value ending value ko wo include nhi krta blke ending value se pehle wo khatm krdeta he
const newString2 = myName.slice(0,6)
console.log(newString2);

// `slice()` method JavaScript mein ek array ke piece ko nikalne ke liye kaam aata hai, aur ek naya array bana ke deti hai. Yeh original array ko change nahi karta, balki sirf ek copy banata hai.

// Is method mein do cheezein hoti hain:

// 1. **Start index (optional):** Yeh batata hai ki kahaan se shuru karna hai. Agar aap ise chhod denge toh 0 index se start hoga.
// 2. **End index (optional):** Yeh batata hai ki kahaan tak jana hai (lekin is index ko include nahi karta). Agar aap ise chhod denge toh array ka end tak jayega.

// Yahan ek simple example hai:

// ```javascript
// let originalArray = [1, 2, 3, 4, 5];
// let slicedArray = originalArray.slice(1, 4);

// console.log(slicedArray); // Output: [2, 3, 4]
// ```

// Is example mein:
// - `originalArray` waisa hi rahega.
// - `slice(1, 4)` `originalArray` se index 1 se lekar index 3 tak (index 4 include nahi) elements nikalta hai, aur usse ek naya array `[2, 3, 4]` banata hai.
// - Extracted array ko `slicedArray` mein daal diya jata hai.

// Agar aap end index ko chhod denge toh woh array ke end tak sab kuch le lega:

// ```javascript
// let slicedArray = originalArray.slice(2);

// console.log(slicedArray); // Output: [3, 4, 5]
// ```

// Is case mein, `slice(2)` method index 2 se lekar array ke end tak elements nikalta hai.

let newStringOne = '      Hello Word.   '
console.log(newStringOne); // isko jab mene print kiya to isne wo space bhi add krdiye jo mjhe nhi chahiye the
console.log(newStringOne.trim()); // agar ham .trim lage dete he to ye khud faaltuu ke spaces ko hata deta he  
console.log(newStringOne.trimStart()); // ye start se krega  
console.log(newStringOne.trimStart()); // ye end se krega

let urlCreateKiya = 'https//www.youtube.com/qitmeer%20raza'
console.log(urlCreateKiya.replace('%20',"-")); // Output "https//www.youtube.com/qitmeer-raza" // ye apke string me kisi bhi eik value ko search krke usko apki marzi ki value se replace krdeta he

console.log(myName.includes('Raza')); // true // ye apke string se value search krta he ke isme value he ke nhi agar hogii to true return krta he warna false.

let mySplitVarieble = 'hello-my-seniors-developers-i-respect-you'
console.log(mySplitVarieble.split('-')); // iska matlab smjhne wala he 

// `split()` method JavaScript mein ek string ko specified separator ke basis par pieces mein divide karne ke liye istemal hota hai. Yeh method ek array return karta hai, jismein original string ke pieces hote hain. Original string par koi change nahi hoti hai.

// Yeh method do parameters leta hai:

// 1. **Separator:** Yeh woh character hai, jiske basis par string ko split kiya jayega. Is parameter ko chhodne par, string ko space (' ') se split kiya jata hai.
// 2. **Limit (optional):** Yeh batata hai ki kitne pieces mein string ko split kiya jana hai. Is parameter ko chhodne par, string ko puri tarah se split kiya jata hai.

// Yahan ek example hai:

// ```javascript
// let sentence = "Hello, how are you doing today?";
// let words = sentence.split(" ");

// console.log(words);
// // Output: ["Hello,", "how", "are", "you", "doing", "today?"]
// ```

// Is example mein:
// - `sentence` ek string hai.
// - `split(" ")` method ne string ko space (' ') ke basis par split kiya hai, aur ek array `["Hello,", "how", "are", "you", "doing", "today?"]` return kiya hai.
// - Is array ko `words` mein assign kiya gaya hai.

// Agar aap koi aur separator use karna chahte hain, toh aap usko `split()` ke andar pass kar sakte hain. 

// Example:

// ```javascript
// let date = "2023-11-14";
// let parts = date.split("-");

// console.log(parts);
// // Output: ["2023", "11", "14"]
// ```

// Is case mein, `split("-")` ne string ko dash ('-') ke basis par split kiya hai, aur array `["2023", "11", "14"]` return kiya hai.

// document.write(myName.concat(' Thanks'))