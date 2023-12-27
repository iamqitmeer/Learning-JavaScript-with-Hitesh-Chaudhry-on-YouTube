// Scope level and mini hoisting in javascript
// ----------------------------------------------------

// Javascript me Curly Bracket Eik Scope H.

// Nested scope JavaScript me ek concept hai jise lexical scoping kehte hain. Lexical scoping ka matlab hai ki ek function ke scope me define kiye gaye variables, us function ke andar ke nested functions ke liye bhi accessible hote hain.

// Jab aap ek function ke andar dusra function define karte hain, toh jo inner function hota hai, wo outer function ke scope me access kar sakta hai. Yeh inner function outer function ke variables aur parameters ko access karke unka use kar sakta hai.

// Example ke liye, yeh ek JavaScript code hai jisme nested scope ka use dikhaya gaya hai:

// javascript
// function outerFunction() {
//   let outerVariable = "Outer variable";

//   function innerFunction() {
//     let innerVariable = "Inner variable";
//     console.log(outerVariable); // Accessing outer variable
//   }

//   innerFunction(); // Calling the inner function
// }

// outerFunction(); // Calling the outer function

// Is example me, `outerFunction` ke andar `innerFunction` define hai. `innerFunction` outer function ke scope me define hui hai, isliye wo `outerVariable` ko access kar sakti hai.

// Nested scope ka use code ko modular banane me aur variables ko properly encapsulate karke code maintainability aur readability ko improve karne me madad karta hai.

// Isse aap apne code ko small, manageable pieces mein divide kar sakte hain, aur har function apne khud ke scope mein kaam karega. Yeh aapko code likhne aur maintain karne mein madad karega, kyunki aapko har function ke liye alag-alag variable names ka tension nahi rahega. Iske alawa, yeh code ko samajhne aur debug karne mein bhi madad karta hai.

// Example -

// function outerFun() {
//   let myName = "Raza";
//   function innerFun() {
//     let innerFunName = "Qitmeer";
//     console.log(myName);
//   }
//   console.log(innerFunName);
//   innerFun()
// }

// outerFun()

// ---------------------- interesting ---------------------------


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


// Is Ko Complete Krne Ke Liye Hoisting ParheNge
// ------------------------------------------------