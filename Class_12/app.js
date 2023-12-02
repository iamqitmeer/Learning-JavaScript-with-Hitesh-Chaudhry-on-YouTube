// Array in Javascript

// Array Hamesha Square Bracket ke andar likhte he. or square bracket kke andar jo hota he usko ham kehte he elementts. ab elementts string bhi hoskte he Number bhi hoskte he. mix he koi bhi problem nhi he ke. eik elementt me ham Number likh rahe he or eik elementt me ham string likh rahe he

// What is Array?
// Array eik Object he . ye use hota he eik varieble me multiple collection of items ko store krne ke liye use hota he.

// means mene eik single array diclear kiya " ourHeroes " ab ham us ke andar multiple collection of items ( Multiple Heroes ke naam enter krSkta hoo ) store krskte he

// e.g.

// let muslimHeroes = [
//   "Salahuddin Ayyubi",
//   "Malcolm X",
//   "Muhammad Ali",
//   "Ibn Battuta",
//   "Fatima al-Fihri",
//   "Ibn Sina (Avicenna)",
//   "Maryam Mirzakhani",
//   "Al-Farabi",
//   "Hakeem Olajuwon",
//   "Tariq ibn Ziyad",
//   "Nawal El Saadawi",
//   "Mansa Musa",
//   "Rumi",
//   "Shirin Ebadi",
//   "Imam Al-Ghazali",
//   "Khadija bint Khuwaylid",
//   "Al-Razi",
//   "Hamza Yusuf",
//   "Averroes (Ibn Rushd)",
//   "Ibn Khaldun",
// ];

// console.log(muslimHeroes);

// Ab mene bola ke multiple Items Add krskte he eik Array me. Question ye he ke agar mujhe 4 number wala call krna hoto me kese kroonga

// Agar Hamein Chahiye ke Hamein 4 number wala call krna hoto iske liye indexing smjhni paregi

// Indexing in Javascript

// JavaScript me indexing ka mtlb hota hai kisi array ya string ke specific element ko access karna. Indexing 0 se start hoti hai, jisse pehla element index 0 par hota hai, doosra index 1 par, aur aise hi aage badhta hai.

// Agar Hamein indexing ka use krke call krwana hoto Array ke naam kesath square bracket laga ke index ka number de denge

// Example

// console.log(muslimHeroes[2]); // Muhammad Ali
// console.log(muslimHeroes[3]); // Ibn Battuta
// console.log(muslimHeroes[6]); // Maryam Mirzakhani
// console.log(muslimHeroes[8]); // Hakeem Olajuwon
// console.log(muslimHeroes[5]); // Ibn Sina (Avicenna)
// console.log(muslimHeroes[0]); // Salahuddin Ayyubi

// Array ke sath jab Bhi agar ham copy opearation krenge to ye Shallow copies banata he

// What is Shallow copies?

// JavaScript me, shallow copy ek object ya array ka copy hota hai jisme sirf references ko copy kiya jata hai, na ki actual values. Shallow copy banane ke kai tarike hote hain,

// -- Shallow copy ka mtlb hai ki agar original object ya array me nested objects ya arrays hain to wo references ke roop me copy honge, lekin agar inme se koi bhi element modify kiya jaye to ye changes shallow copy me bhi dikhai denge, kyun ki actual values copy nahi kiye gaye hain, sirf references. Agar aapko nested structures ka deep copy chahiye, to aapko recursive tareeke se copy karna padega.

// What is Deep copies?

// Deep copy aur shallow copy, JavaScript mein object aur array ko copy karne ke do alag tareeqon ko describe karne ke liye istemal hota hai.

// Deep copy: Ismein, original object ke har level ka copy bana hota hai. Yani ke, agar original object mein koi nested object hai, toh deep copy mein us nested object ka bhi ek alag copy banti hai. Isse, original aur copy mein koi bhi change ek dusre ko influence nahi karte.

// ---------------------------------------

// Array Method

// Push :-

// muslimHeroes.push("Ertugrul Ghazai","Usman Ghazai")

// Ye Value Add Krta he End Me
// isme Ham Arguement Dete he kyu ke Hamein Usi Arguement ke Andar Batana he ke Value kya add krni he

// Pop :-

// muslimHeroes.pop()

// Ye Value romove krta he End se
// isme Ham Arguement nhi Dete he kyu ke usko end se value delete krni he wo khud detect krke remeve krde ga end se value

// Unshift :-

// muslimHeroes.unshift("Usman Ghazi")

// Ye Value Add Krta he Shuru Me
// isme Ham Arguement Dete he kyu ke Hamein Usi Arguement ke Andar Batana he ke Value kya add krni he

// Shift :-

// muslimHeroes.shift()

// Ye Value romove krta he Shuru se
// isme Ham Arguement nhi Dete he kyu ke usko shuru se value delete krni he wo khud detect krke remeve krde ga shuru se value
// console.log(muslimHeroes);

// Slice :-

// Ham ne dekha ke ham Add OR remove krskte he Shuru ka index OR end ka index. agar hamEin Print krna ho. Array ke eik chote se part Ke. chahe wo jaha bhi  exist krTa ho. End me Center me Ya Start me. to Ham use kr skte he slice method ko. 

// Sab se pehle Array ka naam ke sath .slice likh kr iske round bracket me ajayenge. or bracket me akar batana he ke Array ke konse index se shuru krna he e.g. 3 phir , lagake batana he ke konse index tk ki value chahiye e.g. 8. , Note agar hamne likha 8 to ye 8 tk nhi blke is se eik number pehle pr end krega. mtlb agar hamne likha muslimHeroes.slice(3,8) to ye 7 pr khtm krdega

// console.log(muslimHeroes.slice(1,2));

// JavaScript me `slice()` ek array method hai jo ek array ke specified portion ko extract (ya "slice") karta hai aur ek naya array banata hai. Is method ka basic syntax yeh hota hai:

// ```javascript
// array.slice(start, end)
// ```

// Yahan, `start` parameter array ke shuruwat ke index ko represent karta hai, jabki `end` parameter array ke ant ke index ko represent karta hai. `start` index ka element shamil hota hai lekin `end` index ka element shamil nahi hota. Agar `end` parameter nahi diya gaya hai, ya fir `end` index `start` index se chhota hai, toh slice array me array ke ant tak sabhi elements shamil honge.

// Yeh ek example hai:

// ```javascript
// let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// // Slice the array from index 1 to 3 (exclusive)
// let slicedFruits = fruits.slice(1, 3);

// console.log(slicedFruits); // Output: ['banana', 'orange']
// ```

// Is example mein, `slice(1, 3)` se array ke index 1 se 3 tak ke elements include hote hain, lekin 3rd index ka element include nahi hota.

// Is tareeke se, `slice()` method ka istemal array ke specific part ko alag karne aur naye array banane ke liye hota hai.


// Splice :-

/*

JavaScript mein `splice` ek array method hai, jise array mein elements ko add, remove, ya replace karne ke liye use kiya ja sakta hai. Is method ka syntax is tarah hota hai:

```javascript
array.splice(start, deleteCount, item1, item2, ...)
```

- `start`: Ye parameter woh index hota hai, jahan se splice operation shuru hoga.
- `deleteCount`: Ye parameter woh number hota hai, jo elements ko remove karne ke liye specify karta hai.
- `item1, item2, ...`: Ye optional parameters hote hain, jinhe array mein add karne ke liye use kiya ja sakta hai.

Kuch examples ke through samajhte hain:

1. **Elements remove karna:**
   ```javascript
   let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
   fruits.splice(1, 2); // Removes 2 elements starting from index 1
   console.log(fruits); // Output: ['Apple', 'Mango']
   ```

2. **Elements add karna:**
   ```javascript
   let fruits = ['Apple', 'Mango'];
   fruits.splice(1, 0, 'Banana', 'Orange'); // Adds 'Banana' and 'Orange' at index 1
   console.log(fruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango']
   ```

3. **Elements replace karna:**
   ```javascript
   let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
   fruits.splice(2, 1, 'Grapes'); // Replaces 1 element at index 2 with 'Grapes'
   console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango']
   ```

Ye method array ko modify karta hai aur modified array ko return karta hai.

*/

// IndexOf :-
// console.log(muslimHeroes.indexOf("Hamza Yusuf"));
// ye mere array me jakar meri value means .indexOf ke round bracket ke andar jo value me diHogi ye wo value dhoondke iske index ka number return krdega
// Note - Agar iska Answer -1 aya to iska matlab ye he ke isko value mili hi nhi he

// Join :-

// const newArr = muslimHeroes.join()
// .join hamare array ko convert krde ga string me. ye real array me change nhi krta
// console.log(newArr);
// console.log(muslimHeroes);

// ----------------------------------------

// Array ke Kuch Method He Jo QuestionaIre Hote he Mean ke iska answer true / false Ata he

// Include

// console.log(muslimHeroes.includes("Hamza Yusuf"));
// Ye Array me Jayega OR Hamne isko jo value di hogi. .includes ke round bracket ke andar ye use detect krega agar value hogi to answer true dega agar nhi hogi to answer false deGa

// Difference B/W Slice & Splice

// `slice` aur `splice` dono JavaScript array methods hain, lekin inka istemal aur kaam alag hai.

// ### 1. `slice`:
// - `slice` method ek array se specified range ke elements ko copy karke naya array banata hai. Original array ko modify nahi karta.
// - Iska syntax yeh hota hai:
//   ```javascript
//   array.slice(start, end)
//   ```
//   Yahan, `start` parameter array mein se copy shuru hone wale element ka index hai, aur `end` parameter woh index hai jahan copy khatam hota hai. `end` index tak ka element include nahi hoga.

//   Example:
//   ```javascript
//   let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
//   let slicedFruits = fruits.slice(1, 3);
//   console.log(slicedFruits); // Output: ['Banana', 'Orange']
//   console.log(fruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango']
//   ```

// ### 2. `splice`:
// - `splice` method array mein changes karta hai, elements ko add, remove, ya replace karke. Original array modify hota hai.
// - Iska syntax yeh hota hai:
//   ```javascript
//   array.splice(start, deleteCount, item1, item2, ...)
//   ```
//   Yahan, `start` parameter woh index hai jahan se operation shuru hoga, `deleteCount` parameter woh number hai jo elements remove karne ke liye specify karta hai, aur `item1, item2, ...` optional parameters hain jinhe array mein add karne ke liye use kiya ja sakta hai.

//   Example:
//   ```javascript
//   let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
//   fruits.splice(1, 2, 'Grapes', 'Kiwi');
//   console.log(fruits); // Output: ['Apple', 'Grapes', 'Kiwi', 'Mango']
//   ```

// To summarize, `slice` creates a new array by copying a portion of an existing array without modifying it, while `splice` modifies the original array by adding, removing, or replacing elements.

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// Array part 2 in Javascript

