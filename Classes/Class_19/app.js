// THIS and arrow function in javascript

/*
Arrow functions JavaScript mein ek concise syntax provide karte hain traditional function expressions ke liye. Ye syntax ES6 (ECMAScript 2015) mein introduce hua tha. Arrow functions ko anonymous functions bhi kehte hain, kyunki inme function ka naam nahi hota.

Yahan ek basic arrow function ka example hai:

```javascript
// Traditional function expression
let add = function (a, b) {
  return a + b;
};

// Arrow function
let addArrow = (a, b) => a + b;
```

Ismein, `addArrow` ek arrow function hai, jo `add` ke traditional function expression ko short aur readable taur par likhne ka ek tareeka hai. Arrow functions ko define karne ke liye aap brackets `()` mein parameters likhte hain, phir `=>` (arrow) likhte hain, aur uske baad function body aati hai.

Agar function sirf ek expression return karta hai, to aap function body aur `return` keyword dono ko omit kar sakte hain, jaise ki `addArrow` mein dikhaya gaya hai.

Arrow functions ke kuch important features:

1. **Shorter Syntax**: Arrow functions ki syntax traditional functions se concise hoti hai, jo ki code ko short aur padhne mein aasan banata hai.

2. **Lexical Scoping**: Arrow functions apne parent scope ke `this` ko inherit karte hain, jabki traditional functions apna khud ka `this` binding create karte hain. Isse arrow functions ko lexical scoping ka benefit milta hai.

Arrow functions me this ka context traditional functions ke tarah nahi hota. Arrow functions apne surrounding context ka this use karte hain.
Agar function me ek hi parameter hai, to parentheses ki bhi zarurat nahi hoti, lekin agar parameter nahi hai ya do ya do se zyada hain, to parentheses ki zarurat hoti hai.
Yeh the kuch basic points Arrow functions aur traditional functions ke beech ke antar ko samajhne ke liye. Let me know agar aur kuch clarify karna ho!

   // Traditional function
   function traditionalFunction() {
     setTimeout(function() {
       console.log(this); // 'this' refers to the global object (or undefined in strict mode)
     }, 1000);
   }

   // Arrow function
   function arrowFunction() {
     setTimeout(() => {
       console.log(this); // 'this' refers to the 'this' value of arrowFunction
     }, 1000);
   }
   ```

3. **No `arguments` Object**: Arrow functions mein `arguments` object nahi hota, lekin traditional functions mein hota hai. Arrow functions ke parameters ko use karna recommended hai.

4. **Cannot Be Used as Constructors**: Arrow functions ko `new` keyword ke sath use nahi kiya ja sakta, aur inmein `prototype` property bhi nahi hoti.

5. **Implicit Return**: Agar arrow function mein single expression hai, to wo expression implicit taur par return ho jata hai.

```javascript
// Traditional function
let squareTraditional = function (x) {
  return x * x;
};

// Arrow function with implicit return
let squareArrow = x => x * x;
```

Ye tha ek brief introduction arrow functions ke bare mein. Inka use small, anonymous functions ke liye common hai, jaise ki event handlers, array methods ke callbacks, aur short utility functions.
*/

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// this Keyword -  Ye current context ke baare me batata he.

// Eik Object banate he. taki ache se smjh Aye
const userInfo = {
  useNname: "qitmeeerraza",
  age: 15,
  city: "Karachi",
  country: "Pakistan",

  welcomeMsg: function () {
    // Ab Yaha Pe me eik Shart Lagata Hoo. Agar User koi bhi is function ke andaraye to hi me use ye message paas kroo. yaha pe user name qitmeerraza h. lekin har kisi ka naam ye to nhi hota matlab ye username change bhi ho skta he. ho skta he kisi or ne is Object ko kaam me liya ho. or is object ke username ya koi bhi key ki value ko change krdiya ho. to waha pa ham chahte he ke ye welcomeMsg change ho jaye

    // Ab simple matlab ye he ke. mjhe is function me reh ke is object ke username ko call krna he. ab zara Ghaur kre to mjhe is object ke andar hi function h. matlab object ke andar hi object ki key value ko call krna he. is kaam ke liye this keyword ka use hota he

    // E.g.
    // this.age
    // this.city
    // & Others...

    userInfo.useNname = "Hitesh";
    console.log(`${this.useNname} , Welcome to Website`);
    // console.log(this);
    // agar me sirf console.log(this); likh deta hoo to ye. mjhe reference dega ye log kis scope ke andar bana hua he. means ke abhi ye function ke anadar he to ye mjhe function return krdeGa
  },
};

// console.log(userInfo.welcomeMsg());

// console.log(this);
// agar me sirf console.log(this); likh deta hoo to ye. mjhe reference dega ye log kis scope ke andar bana hua he. means ke abhi ye global yaani kisi bhi scope me nhi he global scope me he to ye hamein global window return krdeGa

// Eik Or Example -

function chaiAurCode() {
  let myName = "Raza";
  console.log(this.myName);
  // This Sirf Object me kaam krta he. Object ke ilawa ye function waghaira me kaam nhi krta
}

// chaiAurCode()

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// Arrow Function

// const arrFun = (a, b) => {
//   console.log(a + b);
// };

// arrFun(2, 4);

// ----------------------------------------------

// Return KeyWord

// const arrowFunction = (a, b) => {
//   return a + b;
// }; // Agra Aisa Syntax h to lage ga

// const arrowFunction2 = (a, b) => { return a + b; }; // Agar Aisa Syntax h to Curlt Bracket {} Bhi Nhi Lagenge Or Return kreyword bhi nhi lage Ga

// const arrowFunction3 = (a, b) => a + b;
// console.log(arrowFunction3(4,5));

// const arrowFunction3 = (a, b) => a + b;
const arrowFunction3 = (a, b) => ({ userName: "qitmeer raza"});
// Agar is ke Andar Object Hota to ye Curly Brakcet ke andar band hoga. aur curly bracket round bracket ke andar band hoga

console.log(arrowFunction3());
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// Difference Between Arrow OR normal Function

/*

Arrow functions (=>) aur normal functions (jo `function` keyword ke sath declare hote hain) ke darmiyan kuch important farq hain:

1. **Syntax:**
   - **Normal Function:**
     ```javascript
     function add(a, b) {
       return a + b;
     }
     ```
   - **Arrow Function:**
     ```javascript
     let add = (a, b) => a + b;
     ```

2. **Return Keyword:**
   - **Normal Function:** `return` keyword ka istemal hota hai function se kuch return karne ke liye.
   - **Arrow Function:** Agar arrow function me sirf ek expression hai, to `return` keyword aur curly braces ki zarurat nahi hoti. Expression ka value automaticallly return ho jata hai.

3. **`this` Keyword:**
   - **Normal Function:** Normal functions ke andar, `this` keyword ka apna apna context hota hai. `this` ke value function kaise call hua hai, uspar depend karti hai.
   - **Arrow Function:** Arrow functions apne surrounding context ka `this` use karte hain. Iska matlub hai ki arrow function ka `this` value wo hota hai jo uske bahaar (surrounding code) ka `this` hai.

4. **Arguments Object:**
   - **Normal Function:** Normal functions ke andar `arguments` object hota hai, jo function ke arguments ko represent karta hai.
   - **Arrow Function:** Arrow functions me `arguments` object nahi hota. Agar aapko arguments ki zarurat hai, to aap parameters ka istemal karein.

5. **Constructor Function:**
   - **Normal Function:** Normal functions ko constructor ke taur par istemal kiya ja sakta hai, jisse new keyword ke sath objects create kiye ja sakte hain.
   - **Arrow Function:** Arrow functions constructor ke taur par istemal nahi kiye ja sakte hain. Isme new keyword ke sath objects create nahi honge, aur `this` bhi apne lexical context ka hoga.

Yeh the kuch key differences arrow functions aur normal functions ke darmiyan. Arrow functions ka istemal compact syntax aur `this` keyword ke saath sahi behavior ke liye hota hai, jabki normal functions more versatile hote hain aur kuch specific use cases ke liye zyada suitable hote hain.

*/
