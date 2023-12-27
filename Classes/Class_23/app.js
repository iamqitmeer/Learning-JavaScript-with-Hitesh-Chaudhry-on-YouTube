// For loop with break and continue in javascript
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

/*
JavaScript mein loops ek aise programming construct hote hain jo ek set of instructions ko multiple baar execute karne mein madad karte hain. Ye loops programming mein repetitive tasks ko automate karne aur code ko concise banane ke liye istemal hote hain. JavaScript mein kuch main types ke loops hote hain

"For loop" JavaScript mein ek control flow statement hai jo ek specific block of code ko multiple baar execute karne mein madad karta hai. Ye loop ek condition ko evaluate karta hai aur jab tak ye condition true hoti hai, tab tak loop chalta rahta hai.

Yahan ek basic for loop ka syntax hai:

```javascript
for (initialization; condition; increment/decrement) {
  Code to be executed
}
```

Isme:
- `initialization`: Loop ke shuruwat mein ek baar execute hota hai aur variables ko initialize karta hai.
- `condition`: Har loop iteration ke shuruwat mein evaluate hota hai. Agar ye condition true hoti hai, to loop chalta rahega; agar false hai, to loop terminate ho jayega.
- `increment/decrement`: Har loop iteration ke baad execute hota hai. Isme variable ki value ko badhaya ya ghataya jata hai.

Example:

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

Is loop mein `i` ko 0 se shuruwat kiya gaya hai, jab tak `i` less than 5 hai, tab tak loop chalta rahega, aur har iteration mein `i` ko ek increment milta hai.

Ab, "break" keyword ka use hota hai loop ko forcefully terminate karne ke liye. Agar kisi point par code execution mein kuch specific condition aati hai jiske wajah se loop ko stop karna hai, to "break" ka istemal kiya jata hai. Yahan ek example hai:

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
  if (i === 2) {
    break; // Loop ko terminate karna
  }
}
```

Is example mein, jab `i` ki value 2 ho jati hai, tab "break" statement execute hota hai aur loop terminate ho jata hai.
*/

// Example For Loop
// for (let i = 1; i <= 12; i++) {
//   let element = i;
//   console.log(element);
// }

// Nested Loop
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// Nested loops ka matlab hai loops ke andar doosre loops ka istemal karna. Ye ek programming technique hai jise aap multiple levels ki iteration ke liye istemal kar sakte hain. Nested loops ka use tab hota hai jab aapko ek set of instructions ko alag-alag conditions ke tahat multiple baar execute karna hai.

// Yahan ek example hai jisme do nested loops ka istemal kiya gaya hai:

// ```javascript
// for (var i = 1; i <= 3; i++) {
//   for (var j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }
// ```

// Is example mein, outer loop `i` ko 1 se 3 tak iterate karta hai, aur har iteration mein inner loop `j` ko 1 se 3 tak iterate karta hai. Iss tarah se, har `i` ke liye, `j` 1 se 3 tak iterate hoga. Output aisa hoga:

// ```
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3
// ```

// Nested loops ka istemal complex patterns banane ya multi-dimensional arrays par iterate karne ke liye bhi hota hai. Yeh aapko ek level ke loop se zyada complex scenarios mein madad karte hain.

// Ek aur example dekhte hain jisme nested loops ka istemal ek multiplication table banane mein kiya gaya hai:

// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(i + " * " + j + " = " + i * j);
//   }
// }

// Is code mein, outer loop `i` ko 1 se 10 tak iterate karta hai aur inner loop `j` ko bhi 1 se 10 tak iterate karta hai. Har combination ke liye, multiplication result print hota hai.

// Nested loops ka istemal dhyan se karna chahiye, kyunki bahut zyada nested loops ka istemal performance par asar daal sakta hai. Isliye, jab bhi possible ho, aapko code ko optimize karne ki koshish karni chahiye.

// Nested Loop
// for (let i = 1; i < 11; i++) {
//   console.log(`Table No = ${i}`);
//   for (let j = 1; j < 11; j++) {
//     console.log(`${i} + ${j} = ${i * j}`);
//   }
// }

// Table Output

// Bilkul, main aapko step-by-step guide karunga ki kaise 1 se 10 tak ki table print karni hai using nested loops.

// ```javascript
// // Outer loop for the numbers 1 to 10
// for (let i = 1; i <= 10; i++) {
//   // Initialize a string to store the current row of the table
//   let row = "";

//   // Inner loop for the multiples of the current number (i)
//   for (let j = 1; j <= 10; j++) {
//     // Multiply the outer loop variable (i) with the inner loop variable (j)
//     let result = i * j;

//     // Append the result to the current row string
//     row += `${result}\t`;
//   }

//   // Print the current row after completing the inner loop
//   console.log(row);
// }
// ```

// Is code mein:

// 1. **Outer Loop:** `for (let i = 1; i <= 10; i++)`: Yeh loop 1 se lekar 10 tak chalega.
// 2. **Inner Loop:** `for (let j = 1; j <= 10; j++)`: Yeh loop bhi 1 se lekar 10 tak chalega.
// 3. Har bar inner loop chalne par, `result` variable mein outer loop ki value (`i`) ko inner loop ki value (`j`) se multiply karke store kiya jayega.
// 4. `row` variable mein har bar ek naya result tabulated form mein add kiya jayega.
// 5. Har bar inner loop complete hone par, ek complete row outer loop ke baad console par print kiya jayega.

// Result, aapko 1 se 10 tak ki multiplication table mil jayegi:

// ```
// 1	2	3	4	5	6	7	8	9	10
// 2	4	6	8	10	12	14	16	18	20
// 3	6	9	12	15	18	21	24	27	30
// 4	8	12	16	20	24	28	32	36	40
// 5	10	15	20	25	30	35	40	45	50
// 6	12	18	24	30	36	42	48	54	60
// 7	14	21	28	35	42	49	56	63	70
// 8	16	24	32	40	48	56	64	72	80
// 9	18	27	36	45	54	63	72	81	90
// 10	20	30	40	50	60	70	80	90	100
// ```

// Har ek row mein, numbers 1 se lekar 10 tak hain, aur har column mein numbers ka result hai, jo outer loop variable (`i`) aur inner loop variable (`j`) ka multiplication hai.

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

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

// for (let i = 0; i < muslimHeroes.length; i++) {
//   const element = 
//   document.write(`${muslimHeroes[i]} <br>`);
// }

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// Break Keyword
// -----------------------------------------
// -----------------------------------------

// `break` statement JavaScript mein loops ke andar istemal hota hai, aur yeh loop ko turant terminate kar deta hai jab yeh statement execute hoti hai. Iska main use loop se bahar nikalne ke liye hota hai.

// Jab aap `break` ka istemal karte hain, toh loop ke baaki ke statements ko ignore karte hue loop se bahar aa jate hain. Yeh kisi specific condition ko check karke loop ko prematurely terminate karne ke liye istemal hota hai.

// Example:

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   if (i === 2) {
//     break; // Loop terminate hoga jab i ki value 2 ho jaaye
//   }
// }

// Is example mein, loop 0 se lekar 4 tak chalega, lekin jab `i` ki value 2 ho jaati hai, `break` statement execute hoti hai aur loop turant terminate ho jata hai. Iska result console par:

// ```
// 0
// 1
// 2
// ```

// Yahan `i` ki value 2 par loop terminate ho gaya hai.

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// JavaScript mein "continue" keyword ka istemal loops mein specific conditions par control transfer karne ke liye hota hai. "continue" ka use kisi particular iteration ko chhod kar, baaki ke iterations ko execute karne ke liye hota hai. Iska matlab hai ke jab "continue" statement execute hota hai, to loop ke baaki ke code block ki execution skip ho jati hai, aur loop ke agle iteration se shuru ho jata hai.

// Yeh kuch common scenarios hain jahan "continue" ka istemal hota hai:

// 1. **Specific Condition Skip:** Agar aap chahte hain ki kuch specific condition par loop ke code block ko na execute kiya jaye, to "continue" ka istemal kiya ja sakta hai. For example:

    // ```javascript
    // for (let i = 0; i < 5; i++) {
    //   if (i === 2) {
    //     // Skip the rest of the code block for i=2
    //     continue;
    //   }
    //   console.log(i);
    // }
    // ```

    // Is example mein, jab `i` ki value 2 hoti hai, to "continue" statement execute hota hai aur baaki ke code block ko skip kar diya jata hai.

// 2. **Loop mein Multiple Conditions:** Agar aapke loop mein kai conditions hain aur aap chahte hain ki kuch conditions par skip ho jaye, to "continue" ka istemal kiya ja sakta hai:

    // ```javascript
    // for (let i = 0; i < 5; i++) {
    //   if (i % 2 === 0) {
    //     // Skip even numbers
    //     continue;
    //   }
    //   console.log(i);
    // }
    // ```

    // Is example mein, jab `i` ki value even (2, 4) hoti hai, to "continue" statement execute hota hai aur baaki ke code block ko skip kar diya jata hai.

// "continue" ka istemal aapko control denmein madad karta hai, jisse aap specific conditions par loop ko customize kar sakein.


// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// for (let i = 1; i <= 20; i++) {
// if(i === 5){
//   console.log("5 Is Favourite");
//   continue
// }  
// console.log(i);
// }