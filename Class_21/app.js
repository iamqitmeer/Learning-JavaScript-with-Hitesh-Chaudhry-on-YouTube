// How does javascript execute code + call stack

/*

JavaScript code ko execute karne ka tareeka web browsers mein alag hota hai aur Node.js environment mein alag hota hai. Main aapko dono cases mein se ek example provide karunga.

**1. Web Browser mein:**

JavaScript code ko web browser mein execute karne ke liye aapko HTML document mein `<script>` tag ka istemal karna hoga. Yeh tag browser ko batata hai ki yeh area JavaScript code contain karta hai.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
</head>
<body>

    <h1>JavaScript Example</h1>

    <!-- JavaScript code -->
    <script>
        // Aapka JavaScript code yahan likhein
        console.log("Hello, World!");
    </script>

</body>
</html>
```

Is HTML document mein, `<script>` tag ke andar likha gaya JavaScript code (`console.log("Hello, World!");`) browser ke taraf se execute hoga. Aap is file ko ek .html extension ke file mein save karke apne web browser mein open kar sakte hain.

**2. Node.js mein:**

Agar aap Node.js environment mein JavaScript code execute karna chahte hain, toh aapko Node.js install karna hoga. Yeh ek server-side runtime environment hai.

1. Pehle aapko [Node.js download](https://nodejs.org/) karna hoga aur apne system mein install karna hoga.

2. Ab, ek text editor mein apna JavaScript code likhein. For example, ek file create karein jiska naam `app.js` ho, aur usmein neeche diye gaye code ko likhein:

```javascript
// app.js
console.log("Hello, World!");
```

3. Terminal ya command prompt open karein, aur apne code ke file ka directory mein navigate karein.

4. Terminal mein yeh command likhein:

```bash
node app.js
```

Yeh command aapke JavaScript code ko execute karega, aur output `Hello, World!` terminal mein dikhai dega.

Umeed hai ki yeh samajh aaya ki JavaScript code kaise execute hota hai web browser mein aur Node.js environment mein.

----------------------------------------------------------------
----------------------------------------------------------------
----------------------------------------------------------------
----------------------------------------------------------------


Bilkul, main step-by-step taur par samjha raha hoon.

**Web Browser mein JavaScript code execute karna:**

1. **HTML Document Create Karein:**
   Sabse pehle, aapko ek HTML document create karna hoga. Is document mein aap JavaScript code include karenge.

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>JavaScript Example</title>
   </head>
   <body>

       <h1>JavaScript Example</h1>

       <!-- JavaScript code -->
       <script>
           // Aapka JavaScript code yahan likhein
           console.log("Hello, World!");
       </script>

   </body>
   </html>
   ```

2. **Web Browser Mein Open Karein:**
   Is HTML document ko ek .html extension ke file mein save karein, aur usse apne web browser mein open karein. Aap dekhein ge ki "Hello, World!" console mein dikhai dega.

**Node.js mein JavaScript code execute karna:**

1. **Node.js Install Karein:**
   Node.js ko [download](https://nodejs.org/) karein aur apne system mein install karein.

2. **Text Editor Mein JavaScript Code Likhein:**
   Ek text editor ka istemal karke apna JavaScript code likhein. For example, ek file create karein jiska naam `app.js` ho, aur usmein neeche diye gaye code ko likhein:

   ```javascript
   // app.js
   console.log("Hello, World!");
   ```

3. **Terminal Mein Command Likhein:**
   Terminal ya command prompt ko open karein, aur apne code ke file ka directory mein navigate karein.

4. **Node.js Se Code Execute Karein:**
   Terminal mein yeh command likhein:

   ```bash
   node app.js
   ```

   Yeh command aapke JavaScript code ko execute karega, aur output `Hello, World!` terminal mein dikhai dega.

Umeed hai ki yeh aapko ache se samajh aaya hoga ki JavaScript code kaise execute hota hai web browser mein aur Node.js environment mein. Agar aapko koi specific point samajh nahin aaya, toh poochhein!

*/

// Javascript Excecution Context
// Matlab Koi Bhi File Banayi usko Javascript Run kaise kreGi? run krne ke liye Javascript Hamare Programm ko 2 Phase. me run krti He

// Example Ye Code He

let hamaraNaam = {
    name : "Qitmeer raza",
}

// 1 - Sab se Pehle Hamare Paas Global Excecution Context Banta he. is this ke andar rakh diya jata he.
//  2- Function / Functional Excecution Context
// 3 - Eval Excecution Context

// run krne ke liye Javascript Hamare Programm ko 2 Phase. me run krti He
// 1 - Memory Creation Phase / Creation Phase
// Momory Creation Phase me Jo bhi Hamare Varieble Hote he. inke liye Space elocate hota he. excecute nhi hote sirf space elocate hota he.

/*

JavaScript me memory creation phase primarily execution context ke tahat hota hai. Execution context ek internal data structure hota hai, jise JavaScript engine create karta hai jab koi script run hoti hai. Ye ek two-phase process hota hai: Memory Creation Phase aur Code Execution Phase.

1. **Memory Creation Phase:**
   - **Global Object Creation:** Global object (window in the case of browsers) aur uske associated properties create hote hain.
   - **'this' ka value set karna:** 'this' keyword ka value determine hota hai. Global context mein 'this' global object ko refer karta hai.
   - **Outer Environment ka setup karna:** Lexical scoping ke basis par, current code ka context determine hota hai.

2. **Code Execution Phase:**
   - **Variable Object Creation:** Function ke case mein, ek variable object create hota hai jise function ke scope mein use hone wale variables ke liye reserve kiya jata hai.
   - **Scope Chain Determination:** Lexical scoping principles ke basis par scope chain decide hota hai.
   - **'this' ka actual value set karna:** Function ke context mein 'this' ka actual value set hota hai.
   - **Code Execution:** Ab actual code ko line by line execute kiya jata hai.

Example:

console.log(a); // undefined
let a = 5;
console.log(a); // 5

Memory Creation Phase mein, variable `a` memory mein hoisting ke karan undefined ho jayega. Code Execution Phase mein, `a` ko 5 assign kiya jayega aur doosri console.log statement mein 5 print hoga.

JavaScript me memory creation phase aur code execution phase asynchronous taur par hota hai. Isiliye, hoisting ke wajah se variables aur functions ko code se pehle bhi access kiya ja sakta hai, lekin unki values undefined hoti hain jab tak execution code tak nahi pahunchta.
*/

/*

Certainly! Yahan ek chhota sa JavaScript code hai:

```javascript
var x = 10;

function addNumbers(a, b) {
  return a + b;
}

var result = addNumbers(x, 5);

console.log(result);
```

Ab maine is code ko steps mein break down kiya hai, jise execution ke waqt kaise interpret kiya jayega:

1. **Memory Creation Phase:**
   - Global context ke liye memory create hogi.
   - `x` variable ke liye memory allocate hogi aur uski initial value `undefined` hogi.
   - `addNumbers` function ke liye memory allocate hogi, lekin function body abhi tak execute nahi hua hai.
   - `result` variable ke liye memory allocate hogi aur uski initial value `undefined` hogi.

2. **Code Execution Phase:**
   - `var x = 10;` execute hoga. Ab `x` ki value 10 hogi.
   - `function addNumbers(a, b)` declare hua hai, lekin abhi execute nahi hua.
   - `var result = addNumbers(x, 5);` execute hoga. `addNumbers` function ka call hoga, aur isme `x` ki value 10, `5` pass hoga. `addNumbers` function 10 + 5 karega aur result variable mein store hoga.
   - `console.log(result);` execute hoga. `result` ki value, jo ab 15 hai, console par print hogi.

3. **Output:**
   ```
   15
   ```

Is tarah se, memory creation phase mein variables aur functions ki initial setup hoti hai, aur phir code execution phase mein actual code run hota hai. Execution context ke hisab se variables ki values set hoti hain aur functions call hoti hain.

*/

// 2 - Excecution Phase

/*

JavaScript ka execution phase, JavaScript code ko interpret aur execute karne ka process hai. Jab aap apne browser mein koi web page open karte hain, to browser JavaScript code ko execute karta hai. Is process ko samajhne ke liye, ek basic JavaScript program ke execution phase ka breakdown diya gaya hai:

1. **Source Code:**
   - Pehle, aap JavaScript code likhte hain. Ye code aapke HTML document ke `<script>` tags ke andar ya external JavaScript file mein ho sakta hai.

     ```javascript
     // Example JavaScript code
     console.log("Hello, World!");
     ```

2. **Tokenization and Lexical Analysis:**
   - Is phase mein, JavaScript engine code ko tokens mein divide karta hai. Tokens JavaScript ke smallest building blocks hote hain, jaise keywords, identifiers, operators, etc.

3. **Syntax Parsing:**
   - Ab, engine syntax ko analyze karta hai, yani ki code ka structure check karta hai. Ye phase syntax errors ko detect karta hai.

4. **AST (Abstract Syntax Tree) Creation:**
   - JavaScript engine ek Abstract Syntax Tree (AST) create karta hai. AST tree ka representation hai jo code ka structure dikhata hai. Ye tree, code ke different parts ke relationships ko darust dikhata hai.

5. **Execution Context Creation:**
   - Jab code execute hota hai, to JavaScript engine ek execution context create karta hai. Execution context me variables, functions, scope, this, etc., shamil hote hain. Har function call ya block of code ke liye ek naya execution context banta hai.

6. **Hoisting:**
   - Hoisting ka matlab hai ki JavaScript engine variable aur function declarations ko code ke shuruwat mein le aata hai. Lekin, inki values ko nahi. Isse, aap variable ko use kar sakte hain even before aapne use initialize kiya ho.

     ```javascript
     console.log(x); // undefined
     var x = 5;
     ```

7. **Execution:**
   - Ab, JavaScript engine code ko line by line execute karta hai. Variables ko initialize karta hai, functions ko call karta hai, aur output produce karta hai.

     ```javascript
     // Execution phase
     console.log("Hello, World!"); // Output: Hello, World!
     ```

8. **Garbage Collection:**
   - Last mein, engine unused variables ya objects ko identify karta hai aur unhe memory se release kar deta hai.

Yeh steps code execution ke general process ko represent karte hain. Har step mein, engine checks karta hai ki code kis tarah se execute hoga aur kaise interpret kiya jayega.

*/
