// Immediately Invoked Function Expressions - ( IIFE )
// ------------------------------------------------------

// "Immediately Invoked Function Expression" (IIFE) ek JavaScript concept hai jisme ek function define kiya jata hai aur phir use immediately call (invoke) bhi kiya jata hai. IIFE ka mtlb hai ki ye function define hota hai aur foran uski execution bhi ho jati hai. Iska mtlb variables ko local scope me rakhna aur global scope pollution se bachna hota hai.

// Yahan ek simple example hai IIFE ka:

// (function() {
//   // IIFE ke andar ka code
//   console.log("I am inside an IIFE!");
// })();

// IIFE ka syntax:

// (function() {
//   // Code goes here
// })();

// Isme `(function() { /* code */ })` ek function expression hai, aur phir uske turant baad ek set of parentheses `()` function ko invoke karne ke liye hai. Is tarah se function immediately call ho jata hai.

// IIFE ka ek aur common use case ye hota hai ki aap apne code ko wrap karke ek isolated environment create kar sakte hain, jisse aapke variables dusre code se clash na karein.

// Example:

// (function() {
//   var localVar = "I am a local variable";
//   console.log(localVar);
// })();

// Ye line neeche error degi kyunki localVar local scope me hai aur bahar access nahi ho sakta
// console.log(localVar); // ReferenceError: localVar is not defined

// Is example me `localVar` variable IIFE ke andar define kiya gaya hai, isliye bahar se usko access nahi kiya ja sakta.

// IIFE ka istemal mainly global scope pollution se bachne ke liye hota hai aur code organization me madad karta hai.

// -------------------------------------------------------------
// -------------------------------------------------------------

// IIFE (Immediately Invoked Function Expression) arrow functions ke sath bhi chal sakta hai, lekin syntax me thoda sa antar hota hai. Arrow functions ke case me parentheses ka istemal karke IIFE ko surround karna zaroori hai.

// Yahan ek example hai IIFE ka arrow function ke sath:

// (() => {
//   console.log("I am inside an IIFE with an arrow function!");
// })();

// Is example me `() => { /* code */ }` ek arrow function hai, aur phir uske turant baad ek set of parentheses `()` arrow function ko invoke karne ke liye hai.

// Yeh ek common practice hai ki IIFE ko parentheses ke andar rakhna, taki clarity bani rahe aur JavaScript interpreter ko ye samajhne me asaan ho ki ek function expression ko turant call kiya ja raha hai.

// To summarize, IIFE arrow functions ke sath bhi kaam karte hain, lekin parentheses ka istemal karna important hai.

// -------------------------------------------------------------
// -------------------------------------------------------------

// Arrow Function
(() => {
  console.log("DB Connect");
})();

// Normal Function

(function () {
  console.log("Call");
})();

// Syntax

// (
// iske andar function banaeinge
// ) (ye excecution ke liye hota he)


// -------------------------------------------------------------
// -------------------------------------------------------------

// Why Use IFFE?

// Global Scope ke Pollution ko Hatane ke Liye IFFE Ka use kiya
// Jo Function Immeditely Excecute Hojaye.

