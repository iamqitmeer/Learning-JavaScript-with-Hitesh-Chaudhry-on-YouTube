// While and do while loop in Javascript

// "While loop" ek programming concept hai jo ek block of code ko execute karta hai jab tak specified condition true hoti hai. Ye loop tab tak chalta hai jab tak condition false nahi hojati. While loop ka basic syntax kuch is tarah hota hai:

//javascript
// while (condition) {
//   // Code to be executed as long as the condition is true
// }

// Yahan "condition" ek boolean expression hoti hai. Jab ye condition true hoti hai, tab loop ke andar ka code execute hota hai. Jab condition false hojati hai, tab loop se bahar nikal jata hai aur program agla statement execute karta hai.

// Yeh ek simple example hai:

// javascript
// let count = 1;

// while (count <= 5) {
//   console.log("Count is: " + count);
//   count++;
// // }

// Is example mein, jab tak `count` 5 se chota ya equal hai, tab tak loop chalega. Har iteration mein, "Count is: [count]" print hoga aur `count` ko ek increment milta hai. Jab `count` 6 hojata hai, tab condition false hojati hai aur loop se bahar nikal jata hai.

// While loop ka istemal code ko repeat karne ke liye kiya jata hai jab tak kisi specific condition ko meet nahi kiya jata.

// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------

// "do-while loop" ek programming construct hai jo ek block of code ko execute karta hai jab tak ek specified condition true ho. Is loop ka structure kuch is tarah hota hai:

// ```javascript
// do {
//   // Code to be executed
// } while (condition);
// ```

// Yahan, "do" keyword ke baad ek block of code hota hai jo execute hota hai, phir "while" keyword ke baad ek condition hoti hai. Jab ye block of code execute hota hai, tab condition ko check kiya jata hai. Agar condition true hoti hai, to loop dobara execute hota hai; agar condition false hoti hai, to loop se bahar nikal jata hai.

// Yeh loop guarantee karta hai ki block of code kam se kam ek baar to execute hoga, bina condition check kiye. Iska matlab hai ki loop ke block ko pehle execute kiya jata hai, phir condition check hoti hai.

// Yahan ek example hai:

// ```javascript
// var count = 0;

// do {
//   console.log("Count: " + count);
//   count++;
// } while (count < 5);
// ```

// Is example mein, loop ke block mein "Count: " + count ko console par print karte hue count ko increment kiya jata hai. Ye tab tak chalta rahega jab tak count 5 se kam hai. Iska output hoga:

// ```
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// ```

// Fir loop ke block mein count ko increment karne ke baad condition false ho jati hai, aur loop se bahar nikal jata hai.

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
  "Tariq ibn Ziyad"
];

// let i = 0
// while (i < muslimHeroes.length) {
//   document.write(`${muslimHeroes[i]} <br>`);
//   i++
// }

// let i = 0
// do {
//   console.log(`My Value is ${i}`);
//   i++
// } while (i < 5);
