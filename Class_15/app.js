// Functions and parameter in javascript

// JavaScript mein functions ek important concept hain jo code ko organize aur reusable banane mein madad karte hain. Function ek set of statements hota hai jo ek specific task ko perform karta hai. Jab aap ek function define karte hain, aap usse baar-baar call kar sakte hain bina uske code ko dohrane ki zarurat ke.

// Example :-

// console.log("Q");
// console.log("I");
// console.log("I");
// console.log("I");
// console.log("E");
// console.log("E");
// console.log("R");

// Mjhe Ye Kaam 10 Martaba Krna H. Obvious si Baat He Problem to Hogi Code Lamba Hoga.

// Function Banane ke liye Simple function jo eik keyword h. Or uska Kuch bhi naam de skte he. jaise varieble ke naam deTe the ham. {} yaani block of code me hame batana ke ye function hamare liye kaam kya kreGa

// function sayMyName() {
//   console.log("Q");
//   console.log("I");
//   console.log("I");
//   console.log("I");
//   console.log("E");
//   console.log("E");
//   console.log("R");
//   console.log(" ");
//   console.log(" ");
// }

// agar hamein function ko excecute krna ya print krna hoto ham.

// sayMyName // ye reference he. agar print krwana he to age round bracket lagana hoge
// sayMyName()
// Ab Ham ise Apnii Marzi se Call kr skte he.

// ------------------------------------------
// ------------------------------------------
// ------------------------------------------

/*
Function mein parameters aur arguments dono hi important concepts hote hain, aur in dono ke madhyam se aap data ko functions mein pass kar sakte hain.

### Parameters:
Parameters function ke definition mein specify kiye jaate hain. Ye placeholders hote hain jo function ke liye expected input values ko represent karte hain. Jab aap function define karte hain, aap parameters ka naam declare karte hain, jinhe function ke body mein use kiya ja sakta hai. Parameters function ke signature ka ek hissa hote hain.

**Example:**

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

Yahan `name` parameter hai, jo greet function ke liye ek input value expect karta hai.

### Arguments:
Arguments function ko call karte waqt actual values hote hain jo function ke parameters ke through pass kiye jaate hain. Jab aap function ko call karte hain, aap parameters ke liye specific values provide karte hain, jo function ke body mein use ho sakte hain.

**Example:**

```javascript
greet("John");
```

Yahan "John" ek argument hai, jo `greet` function ko call karte waqt `name` parameter ke through function ke andar pahunchta hai.

**Multiple Parameters:**

Function mein ek se zyada parameter bhi ho sakte hain. Aap multiple parameters define kar sakte hain, aur function call karte waqt aapko saare parameters ke liye corresponding values provide karni hogi.

**Example:**

```javascript
function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(5, 3); // Output: 8
```

Yahan `addNumbers` function ke do parameters hain (`a` aur `b`), aur function ko call karte waqt humne dono parameters ke liye values pass ki hai (5 aur 3).

To summarize, parameters function definition ke hisse hote hain jo input values ko represent karte hain, jabki arguments actual values hote hain jo function ko call karte waqt parameters ke liye provide kiye jaate hain.
*/

//  ------------------------------------------
//  ------------------------------------------
//  ------------------------------------------
//  ------------------------------------------

/*
`return` keyword function mein use hota hai jab aap ek value ko function se bahar laana chahte hain. Jab function kuch calculations karta hai ya kisi task ko perform karta hai aur uska result ya kuch value wapas chahiye hota hai, to aap `return` keyword ka istemal karte hain.

**Syntax:**
```javascript
function functionName(parameters) {
  // Function body (code)
  // Statements to be executed when the function is called
  
  return result; // Optional: You can return a value from the function
}
```

**Example:**
```javascript
function add(x, y) {
  let sum = x + y;
  return sum;
}

let result = add(3, 5);
console.log(result); // Output: 8
```

Yahan `add` function ek sum calculate karta hai (`x + y`), aur fir us sum ko `return` keyword ke through wapas bhejta hai. Jab aap `add(3, 5)` ko call karte hain, function `8` ko return karta hai, aur is value ko `result` variable mein store karke console par print kiya jata hai.

`return` statement function ko terminate kar deta hai, iska matlab hai ki jab function ek baar `return` statement ko execute karta hai, to baki ke function body ke statements ko ignore karta hai aur control function call ke jagah wapas chala jata hai.

`return` keyword ka istemal kisi value wapas lana ke alawa bhi hota hai, jaise ki function mein koi condition check karna aur uske basis par control ko wapas bhejna.

`return` keyword ke baad koi bhi kaam krenge wo kabhi bhi excecute nhii hoga
*/

// Example

// function loginUser(userName = "Raza") {
//   return console.log(`${userName} just Logged in`);
// }

// loginUser("Qitmeer")
// Agar User Arguement Nhi Deta to ham Parameter me defaul Value bhi de skte he.
// loginUser()