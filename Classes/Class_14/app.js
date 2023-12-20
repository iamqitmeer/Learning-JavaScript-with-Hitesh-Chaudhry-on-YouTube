// Object de-structure and JSON API intro

const course = {
  courseName: "Js in Hindi",
  coursePrice: 999,
  courseInstructor: "hitesh",
};

/*
JavaScript me object de-structuring ek technique hai jise hum object ke properties ko alag-alag variables mein unpack kar sakte hain. Ye syntax concise hota hai aur code ko padhne mein aur likhne mein asaan banata hai.

Yahan ek simple example hai:

```javascript
// Object definition
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Object de-structuring
const { firstName, lastName, age, address: { city, country } } = person;

// Use the variables
console.log(firstName);  // Output: John
console.log(lastName);   // Output: Doe
console.log(age);        // Output: 30
console.log(city);       // Output: New York
console.log(country);    // Output: USA
```

Yahan `const { firstName, lastName, age, address: { city, country } } = person;` line de-structuring ko demonstrate karti hai. Isme `person` object ke properties ko alag-alag variables mein unpack kiya gaya hai. `address` property ko `address` naam se nahi balki `city` aur `country` variables mein unpack kiya gaya hai.

De-structuring se aap directly object ke properties ko variables mein assign kar sakte hain, jisse aapko individual properties ko access karne mein aur unka use karne mein aasani hoti hai.
*/

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// const deStruc = {firstName,lastName,age} = person;
// Jaise mjhe Lagta he ke firstName kafi bara naam he to me ise aise bhi likh skte hoo
const deStruc = ({ firstName: name, lastName, age } = person);
// console.log(`${name} ${lastName}`);

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// Api Kya Hoti H?

// API, ya Application Programming Interface, ek software ke dwara do alag systems ya applications ke beech communication karne ka ek set of rules hota hai. API, ek application ke features aur functionality ko dusre applications ke sath share karne ka ek tareeka hai. Isse developers ko alag-alag applications ko ek dusre ke sath integrate karne aur interact karne ka mauka milta hai.

// Jab bhi hamein apna kaam kisi or ke sir pe daalni hoto ham use API's kehskte he ge. pehle ke time me wo values ati thi XML extension me wo bohot hi complex hota tha. abhi wo values ati he saari ki saari mostly JSON me.
// Json Kuch is Type ka Hota he

// {
//   "name" : "Qitmeer Raza",
//   "courseName" : "JS in Hindi",
//   "price" : "Free"
// }

// API Sirf Object me nhii hota. blke Array me bhi hota he

// [
//   {},
//   {},
//   {},
//   {},
//   {},
//   {}
// ]

