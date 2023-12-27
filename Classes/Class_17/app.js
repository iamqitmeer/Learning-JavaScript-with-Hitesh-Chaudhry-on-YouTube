// Global and local scope in javascript

// JavaScript me, scope ek concept hai jo variable, function, ya object ke accessibility ko define karta hai. JavaScript me do prakar ke scopes hote hain:

// Global Scope:

// Jab aap kisi variable ya function ko bina kisi function ke ya block ke bahar define karte hain, to uska scope global hota hai.
// Global scope me define kiye gaye variables ya functions ko aap kisi bhi jagah se access kar sakte hain, chahe woh function ke andar ho ya bahar.

let globalVariable = "This is a global variable";

function globalFunction() {
  console.log(globalVariable);
}

globalFunction(); // Output: This is a global variable

// --------------------------------------------
// --------------------------------------------

// Local Scope:

// Local scope tab hota hai jab aap kisi variable ya function ko kisi function ke andar ya kisi block ke andar define karte hain.
// Local scope me define kiye gaye variables ya functions sirf usi function ya block ke andar hi accessible hote hain.

function localScopeExample() {
  var localVariable = "This is a local variable";
  console.log(localVariable);
}

localScopeExample(); // Output: This is a local variable

// Yahan 'localVariable' ko access nahi kiya ja sakta, kyunki woh localScopeExample ke bahar define hua hai.
// console.log(localVariable); // Error: localVariable is not defined

// Scope JavaScript me lexical (ya static) hota hai, yani ki scope compile time me decide hota hai, execution time me nahi. Iska matlab hai ki aap ek function ya block ke andar define kiye gaye variables ya functions ko usi function ya block ke andar access kar sakte hain, lekin unhe bahar se access nahi kar sakte hain.

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------


/*

JavaScript mein `var`, `let`, aur `const` tino hi keywords hain, lekin unmein kuch farq hota hai, aur ye ES6 (ECMAScript 2015) ke sath aaye changes hain.

1. **`var`:**
   - `var` global ya function scope mein hoisting karta hai. Yani ki, variable ko uske scope ke shuruwat mein hi declare kar diya jata hai, lekin uski value undefined hoti hai. 
   - `var` ko dubara declare kar sakte hain, aur iski value update ho sakti hai.
   - `var` ke scope bahut flexible hota hai.

   Example:
   ```javascript
   var x = 10;
   if (true) {
       var x = 20;
       console.log(x);  // Output: 20
   }
   console.log(x);  // Output: 20
   ```

2. **`let`:**
   - `let` block scope hota hai, yani ki, agar aapne kisi variable ko kisi block (jaise ki if statement, loop, etc.) mein declare kiya hai to wo variable sirf us block tak hi limited rahega.
   - `let` ko dubara declare nahi kiya ja sakta, lekin uski value update ho sakti hai.

   Example:
   ```javascript
   let y = 10;
   if (true) {
       let y = 20;
       console.log(y);  // Output: 20
   }
   console.log(y);  // Output: 10
   ```

3. **`const`:**
   - `const` bhi block scope hota hai.
   - `const` ek bar assign hone ke baad dubara assign nahi kiya ja sakta.
   - `const` ko function ya loop ke andar declare karte waqt dhyan rakhna chahiye, kyun ki ek bar value assign hone ke baad use change nahi kiya ja sakta.

   Example:
   ```javascript
   const z = 30;
   // z = 40;  // Error: Assignment to constant variable.
   ```

**ES6 me aapko preferentially `let` aur `const` ka use karna chahiye:**
   - `let` ko use karna chahiye jab aapko variable ki value update karni hai.
   - `const` ka use karna chahiye jab aapko sure hai ki variable ki value change nahi hogi.
   - `var` ka use avoid karna chahiye, kyun ki isme hoisting ki wajah se unpredictable behavior ho sakta hai.

*/
