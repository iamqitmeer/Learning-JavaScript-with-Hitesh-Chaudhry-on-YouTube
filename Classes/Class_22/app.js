// Control flow in javascript in 1 shot

// JavaScript me control flow, program ke execution order ko control karne ka tareeka hai. Yani ki, ye batata hai ki code kis order mein run karega. JavaScript me control flow ko manage karne ke liye kuch key concepts hote hain:

// 1. **Sequential Execution:**
//    JavaScript code normally top to bottom, left to right, sequentially execute hota hai. Yani, jo code pehle likha gaya hai, woh pehle execute hoga.

//    Example:
//    ```javascript
//    console.log("Step 1");
//    console.log("Step 2");
//    console.log("Step 3");
//    ```

//    Output:
//    ```
//    Step 1
//    Step 2
//    Step 3
//    ```

// 2. **Conditional Statements:**
//    Conditional statements (if, else if, else) se aap code ko conditionally execute kar sakte hain based on certain conditions.

//    Example:
//    ```javascript
//    var age = 20;

//    if (age < 18) {
//        console.log("Minor");
//    } else {
//        console.log("Adult");
//    }
//    ```

// 4. **Switch Statement:**
//    Switch statement aik variable ki multiple values ke against cases provide karta hai, aur based on the value, corresponding code block execute hota hai.

//    Example:
//    ```javascript
//    var day = "Monday";

//    switch (day) {
//        case "Monday":
//            console.log("It's the start of the week");
//            break;
//        case "Friday":
//            console.log("Weekend is near");
//            break;
//        default:
//            console.log("Some other day");
//    }
//    ```

// -------------------------------------

// Conditional Statements
// To Implement some condition in the code
// means agar password === true to dashboard dkhadoo ua phr error... ghaur kiya jaein to yaha pe eik condtion an rahii he

// --> If Else - Statement

// ham likhte he if ye hamara reserved keyword hota he phir Ham likhte he  ( condition / expression ) Agar ye true hota he to ye chalta he {
//     ab yaha kuch bhi likh sk te he wo jo condition / expression ke true hone pe chalana he
// }  Agar False Hota he matla condition / expression false hojati he to else{
//     ab yaha kuch bhi likh sk te he wo jo condition / expression ke false hone pe chalana he
// }

// if myAge === 18 // Licence enabled
// else // Not eligible for licence

// e.g.

// let age = 21

// if (age >= 18) {
//     alert('Yan Can Vote')
// } else {
//     alert('Yan Cannnot Vote')
// }

// let darkMode = "dark"
// let color;

// if (darkMode == "dark") {
//     color = "black"
// } else {
//     color = "white"
// }
// console.log(color);

// let myNumber = 90
// if (myNumber >= 50) {
//     console.log('Congratulation')
// } else {
//     console.log("Try Again")
// }

// let num = 9

// if (num % 2 === 0) {
//     console.log('even');
// }else{
//     console.log("Odd");
// }

// -------------------------------------

// Else - If Statement

// misal ke tor pe. Jab Ham is statemen Mein likhate Hain To Ham ismein sirf ek hi ek hi condition ko karte hain lekin Agar Hamen multiple condition Mein Karna Ho Jaise age barabar ho ya gender barabar ho to else if statement

// e.g.

// let yourExamNumber = prompt("Enter your Exam Number");

// if (yourExamNumber >= 90 && yourExamNumber <= 100) {
//   alert("A+");
// } else if (yourExamNumber >= 80 && yourExamNumber <= 100) {
//   alert("A");
// } else if (yourExamNumber >= 70 && yourExamNumber <= 100) {
//   alert("B");
// } else if (yourExamNumber >= 60 && yourExamNumber <= 100) {
//   alert("C");
// } else {
//   alert("Fail");
// }

// -------------------------------------

// Ternary Operators

/*
Abhi Tak hamne aise operator dekh liye jo ke 2 oprands ke upar kaam krte he yaani A + b is me a or b dono oprands he. or aise bhi oprator hote he jo eik oprands ke upar kaam krte he Means hamare unary operator (  A++ OR A--  ) lekin ternary operator 3 oprands ke upar kaam krte he. 

Means 
1 oprands ---> condition
is se pehle " ? "
2 oprands ---> true output
is se pehle " : "
3 oprands ---> false output
;

pehle oprands ke andar koi condition he agar condition true hojati he to 2 oprands chlta he Otherwise 3 oprands chleeGa
*/

// let age = 12;

// let ans =  age >= 18 ? "Eligibal" : "Not Eligibal"
// console.log(ans);

// ye small tareeqa he Conditional Statements likhne ka

// -------------------------------------

// Let's Solve Practice Question

// Q1 | Get user to input a number using prompt("Enter a Numer"). CHeck if the number is a multiple 5 OR not.

// let userPrompt = prompt("Enter a Number")
// if(userPrompt % 3 === 0){
//     console.log(userPrompt ,"Number is multiple a 3");
// }else{
//     console.log(userPrompt ,"Number is Not multiple a 3");
// }

// -------------------------------------

// Q2 | Write a Code which can give to student according to their scores?

// let studentPrompt = prompt("Enter Student Marks")

// if (studentPrompt == 100) {
//     console.log("Very Congratulation!!");
// }
// else if (studentPrompt > 100) {
//     console.log("Number Not Valid");
// }
// else if (studentPrompt >= 80) {
//     console.log("A");
// }
// else if (studentPrompt >= 70) {
//     console.log("B");
// }
// else if (studentPrompt >= 60) {
//     console.log("C");
// }
// else if (studentPrompt >= 50) {
//     console.log("D");
// }
// else if (studentPrompt < 50){
//     console.log("Bad Luck --> Fail");
// }

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

// Comparison Operator
// ------------------------------------------------------------------

/*

JavaScript (JS) me "comparison" ka matlab do values ko compare karna hota hai. Comparison operators JavaScript me use hote hain to compare values aur ek boolean result generate karte hain, jo batata hai ki comparison true hai ya false.

Yahan kuch common comparison operators hain JavaScript me:

1. **Strict Equality (===):** Ye operator do values ko compare karta hai, aur agar dono values equal hain, to true return karta hai. Data type ka bhi check hota hai.

   ```javascript
   var x = 5;
   var y = "5";
   console.log(x === y); // false (value to equal hai, lekin data type different hai)
   ```

2. **Loose Equality (==):** Ye bhi values ko compare karta hai lekin data type ka check nahi karta.

   ```javascript
   var a = 10;
   var b = "10";
   console.log(a == b); // true (value equal hai, data type check nahi kiya gaya)
   ```

3. **Inequality (!=):** Ye operator do values ko compare karta hai, aur agar dono values equal nahi hain, to true return karta hai.

   ```javascript
   var p = 7;
   var q = 3;
   console.log(p != q); // true (values not equal hai)
   ```

4. **Strict Inequality (!==):** Ye bhi values ko compare karta hai, lekin data type ka bhi check karta hai.

   ```javascript
   var m = 5;
   var n = "5";
   console.log(m !== n); // true (value to equal hai, lekin data type different hai)
   ```

5. **Greater Than (>):** Ye operator ek value ko doosre se compare karta hai aur agar first value second value se bada hai, to true return karta hai.

   ```javascript
   var d = 15;
   var e = 10;
   console.log(d > e); // true (15 greater than 10)
   ```

6. **Less Than (<):** Ye operator ek value ko doosre se compare karta hai aur agar first value second value se chhota hai, to true return karta hai.

   ```javascript
   var f = 8;
   var g = 12;
   console.log(f < g); // true (8 less than 12)
   ```

7. **Greater Than or Equal To (>=):** Ye operator ek value ko doosre se compare karta hai aur agar first value second value se bada ya equal hai, to true return karta hai.

   ```javascript
   var h = 20;
   var i = 15;
   console.log(h >= i); // true (20 greater than or equal to 15)
   ```

8. **Less Than or Equal To (<=):** Ye operator ek value ko doosre se compare karta hai aur agar first value second value se chhota ya equal hai, to true return karta hai.

   ```javascript
   var j = 5;
   var k = 5;
   console.log(j <= k); // true (5 less than or equal to 5)
   ```

In comparison operators ka istemal conditional statements, loops, aur doosre programming constructs me kiya jata hai, jisse ki program logic ko control kiya ja sake.
*/

// Short Hand Notation
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------


/*

JavaScript mein, "short-hand notation" ya "ternary operator" ka istemal if-else statement ko ek chhota aur ek-line mein likhne ke liye kiya ja sakta hai. Yeh operator conditional expressions ko represent karta hai. Iska basic format hai:

```javascript
(condition) ? expression_if_true : expression_if_false;
```

Yahan ek example hai:

```javascript
var age = 20;
var status = (age >= 18) ? "Adult" : "Minor";

console.log(status);
```

Is example mein, `age` ki value ko check kiya ja raha hai. Agar `age` 18 se badi hai, toh "Adult" assign kiya jayega, warna "Minor" assign kiya jayega. Is tarah se ternary operator ka istemal ek-line mein if-else statement likhne ke liye hota hai.

Ternary operator ka istemal simple conditions ke liye acha hota hai, lekin complex conditions ke liye yeh readability ko kam kar sakta hai. Hamesha yeh dhyan rakhe ki readability aur code maintainability hamesha important hai, aur ternary operator ka istemal appropriate situations mein hi karein.

*/

// Else If
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

/*

"else if" JavaScript mein ek conditional statement hai jo multiple conditions ko check karne mein istemal hota hai. Yeh statement if-else statement ke extension ka kaam karta hai. Agar pehla "if" condition false hota hai, toh "else if" condition check hoti hai, aur agar yeh bhi false hoti hai, toh "else" block execute hota hai.

Yeh ek basic syntax hai:

```javascript
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true
} else {
  // Code if none of the conditions are true
}
```

Yahan, pehle "if" statement ke baad "else if" statements multiple lagaye ja sakte hain. Har "else if" block apne apne condition ke liye hota hai. Agar koi bhi condition true hoti hai, toh uss block ke code execute hota hai, aur baaki ke "else if" ya "else" blocks skip ho jate hain.

Example:

```javascript
var num = 10;

if (num > 10) {
  console.log("Number is greater than 10");
} else if (num < 10) {
  console.log("Number is less than 10");
} else {
  console.log("Number is equal to 10");
}
```

Is example mein, `num` ki value 10 hai, isliye sirf "else" block ka code execute hoga, aur "Number is equal to 10" print hoga.

*/

// Switch Case Statement
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

/*

JavaScript me switch case statement ka upayog multiple conditional statements ke liye kiya jata hai. Ye ek alternative hai agar aapko if-else if-else ladder ko handle karne me kathinai hoti hai. Yahan ek basic example hai switch case statement ka istemal karke:

```javascript
var day = 2;
var dayName;

switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("The day is: " + dayName);
```

Is example me, `day` ki value ke anusar switch statement me alag-alag cases define kiye gaye hain. Agar `day` ki value kisi bhi case se match hoti hai, to wo case execute hota hai. `break` statement ka upayog case ke ant me lagaya jata hai taki baaki ke cases na execute ho.

Agar koi bhi case match nahi hota hai, to default case execute hota hai. `default` case optional hota hai.

Switch case ka ek aur important point ye hai ki JavaScript me implicit type coercion hoti hai, iska matlab hai ki strict comparison operator (`===`) ka use kiya jata hai. Agar aapko type coercion chahiye, to aap loose comparison operator (`==`) ka istemal kar sakte hain. Lekin, best practice ye hai ki aap strict comparison ka istemal karein.

Mujhe aasha hai ki yeh aapko switch case statement ke basic concept samajhne me madad karega.

*/

// "truthy" & "falsy" values
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------


/*

JavaScript uses the concepts of "truthy" and "falsy" values when evaluating conditions or expressions that require a Boolean result, such as in `if` statements or ternary operators. These concepts are not limited to JavaScript and are present in many programming languages.

In JavaScript, every value has an inherent Boolean value, either `true` or `false`. When a non-Boolean value is used in a context that requires a Boolean, it is automatically converted to its corresponding truthy or falsy value.

Here's a basic overview of truthy and falsy values in JavaScript:

### Truthy values:
- Values that are considered as true when encountered in a Boolean context.
- Examples of truthy values include:
  - Non-empty strings (`"hello"`)
  - Numbers other than `0` and `NaN`
  - Objects (including arrays and functions)
  - The special value `true`
  - Instances of user-defined classes

### Falsy values:
- Values that are considered as false when encountered in a Boolean context.
- Examples of falsy values include:
  - The empty string `""`
  - The number `0`
  - `NaN` (Not a Number)
  - `null`
  - `undefined`
  - The special value `false`

### Example:

```javascript
if ("hello") {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}
```

In this example, the string `"hello"` is a truthy value, so the condition evaluates to `true`, and the code inside the `if` block will be executed.

```javascript
if (0) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}
```

In this example, the number `0` is a falsy value, so the condition evaluates to `false`, and the code inside the `else` block will be executed.

Understanding truthy and falsy values is important when writing conditional statements in JavaScript to ensure that your code behaves as expected.

*/

