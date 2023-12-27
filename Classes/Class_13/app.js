// Objects in depth in javascript

// Objects kya Hota he?
// ---------------------------------------------
// JavaScript me, ek "object" ek complex data type hota hai jo key-value pairs (properties) ka collection hota hai. Har key ek unique identifier hoti hai, aur unke corresponding values un keys ke saath associated hote hain. Objects JavaScript ka ek fundamental concept hai, aur ye language ke bahut se features ko support karta hai.

// JavaScript me, objects bahut versatile hote hain aur aap unhe manipulate kar sakte hain, unme new properties add kar sakte hain, existing properties ko update kar sakte hain, aur unke values ko access karke use kar sakte hain.

// ---------------------------------------

// JavaScript me objects ko create karne ke do tareeke hain:

// ### 1. Object Literal:
// Ye sabse common aur simple tareeka hai, jisme aap directly ek object ko define karte hain:

// Example Code - javascript
// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };
// ```

// Create Basic Object
const jsUser = {
  "full name": "Qitmeer Raza",
  firstName: "Qitmeer",
  lastName: "Raza",
  age: 15,
};

// Access krne ke 2 Ways h.

// Yaha pe Object ka naam likh ke iske sath . or key ka naam likh ke acceess kr skte he

// 1) -> console.log(jsUser.firstName);

// Yaha pe Object ka naam likh ke iske sath [ke andar key ka naam likhdenge string ke andar]

// 2) -> console.log(jsUser["firstName"]);

jsUser["full name"];

// isme jo curly bracket Headers. yehi he objects.. yaha pe key OR value ka system he

// Agar Hamein Kisi Value ko change krna ho
jsUser["full name"] = "Muhammad Iqbal";
// Ham Equal ke sath value ko change krskte he

// Agra Hamein value ko freeze krna ho.. means ke koi bhi hamari valye ko cher na paye. to isKe liye ham..

// jsUser.age = 20;
// Object.freeze(jsUser)
// jsUser.age = 25;
// console.log(jsUser);

// Agar Hamein Object me Function bhi add krna hotoo

// jsUser.greeting = function(){
//    console.log(`Js User ${this.firstName}`);
// }
// console.log(jsUser.greeting());

// Hamare Paas bohot Object hote he agar ham chahte he ke ham is function ke object ki keys ko bulaye to this.KeyKaNaam lage ga

// --------------------------------------

// ### 2. Constructor Function:
// Aap ek constructor function ka use karke bhi object create kar sakte hain. Constructor function ko `new` keyword ke sath call karte hain:

// Example Code - javascript
// // Constructor Function
// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// // Object create karein using constructor function
// var person = new Person("John", "Doe", 30);
// ```

// Constructor function se create kiye gaye objects me usually shared methods ko define kiya ja sakta hai. Ye concept object-oriented programming ka ek hissa hai.

// Dono tareeke effective hain aur aapko use karna depend karta hai ki aapko kis tarah ka object chahiye aur aap kis tarah se us object ko use karna chahte hain. Object literals chhote objects ke liye acche hain jabki constructor functions complex objects ke liye better hote hain, especially jab aap multiple instances create karna chahte hain jinme common behavior ho.

// ---------------------------------------

/*
Bilkul, main koshish karunga ek aur taur par samjhane mein:

**Constructor Function:**
- Ek constructor function, JavaScript mein ek special type ka function hota hai jo objects ko create karta hai.
- Constructor function ka naam usually capital letter se shuru hota hai, taki ise distinguish kiya ja sake ki ye ek constructor hai.
- Ismein aap properties aur methods ko define kar sakte hain, jo ke objects ke instances ke saath share honge.

**Object Creation Using Constructor:**
- Constructor function ko `new` keyword ke sath call karke aap naye objects create kar sakte hain.
- `new` keyword se ek naya empty object create hota hai aur uske baad constructor function us object ke sath execute hota hai.
- `this` keyword se constructor function mein define kiye gaye properties aur methods us naye object ke sath associate ho jate hain.

**Example:**
```javascript
// Constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  
  // Method defined in the constructor
  this.displayInfo = function() {
    console.log(`Car: ${this.year} ${this.make} ${this.model}`);
  };
}

// Create objects using the constructor
var car1 = new Car("Toyota", "Camry", 2022);
var car2 = new Car("Honda", "Accord", 2021);

// Access properties and call method
console.log(car1.make); // Output: Toyota
car2.displayInfo(); // Output: Car: 2021 Honda Accord
```

**Prototype Inheritance:**
- Har object, apne constructor function ke prototype se properties aur methods ko inherit karta hai.
- Isse multiple objects ko ek common set of properties aur methods milte hain, jisse code reusability hoti hai.

**Example with Prototype:**
```javascript
// Constructor function with prototype method
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

// Adding a method to the prototype
Dog.prototype.bark = function() {
  console.log("Woof!");
};

// Create objects using the constructor
var dog1 = new Dog("Buddy", "Labrador");
var dog2 = new Dog("Charlie", "Beagle");

// Access properties and call method
console.log(dog1.breed); // Output: Labrador
dog2.bark(); // Output: Woof!
```

Is tareeke se aap constructor functions ka use karke objects create kar sakte hain aur inhein prototype inheritance ke zariye customize bhi kar sakte hain. Ye ek powerful tareeka hai JavaScript mein object-oriented programming ka.
*/

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

// Objects Part 2 In Javascript

// Ye bhi tareeqa h Object ko declear krne ka.

// const tinder = new Object ()
// tinder.name = "Qitmeer Raza"
// tinder.id = "123abx"
// console.log(tinder);

// Ham Hamare Object ke Nested me bhi jaskte he

// const regularUser = {
//   id: "1233abc",
//   fullName: {
//     userfullName: {
//       firstName: "Qitmeer",
//       lastName: "Raza",
//     },
//   },
// };

// Ham iskoo is tarah bhi access kr skte he
// console.log(regularUser.fullName.userfullName.lastName);

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// JavaScript me, Objects ke kuch common methods hote hain jo aapko Objects ko manipulate karne me madad karte hain. Yahan kuch important methods hain:

// 1. **Object.keys(obj):**
//    Ye method ek object ke sabhi properties ke names ko ek array me return karta hai.

//     ```javascript
//     const person = { name: 'John', age: 30, city: 'New York' };
//     const keys = Object.keys(person);
//     console.log(keys); // ['name', 'age', 'city']
//     ```

// 2. **Object.values(obj):**
//    Ye method ek object ke sabhi values ko ek array me return karta hai.

//     ```javascript
//     const person = { name: 'John', age: 30, city: 'New York' };
//     const values = Object.values(person);
//     console.log(values); // ['John', 30, 'New York']
//     ```

// 3. **Object.entries(obj):**
//    Ye method ek object ke har key-value pair ko ek array ke form mein return karta hai.

//     ```javascript
//     const person = { name: 'John', age: 30, city: 'New York' };
//     const entries = Object.entries(person);
//     console.log(entries);
//     // [['name', 'John'], ['age', 30], ['city', 'New York']]
//     ```

// 4. **Object.assign(target, ...sources):**
//    Ye method ek ya multiple objects ko combine karke ek naya object banata hai.

//     ```javascript
//     const obj1 = { a: 1, b: 2 };
//     const obj2 = { b: 3, c: 4 };
//     const mergedObj = Object.assign({}, obj1, obj2);
//     console.log(mergedObj);
//     // { a: 1, b: 3, c: 4 }
//     ```

// 5. **Object.hasOwnProperty(prop):**
//    Ye method check karta hai ki ek object ke pass diya gaya property khud us object ki property hai ya kisi inherited object ki property hai.

//     ```javascript
//     const person = { name: 'John', age: 30, city: 'New York' };
//     console.log(person.hasOwnProperty('name')); // true
//     console.log(person.hasOwnProperty('toString')); // false (inherited)
//     ```

// Yeh kuch common methods hain, lekin JavaScript me aur bhi object methods hote hain jinke istemal se aap objects ko manipulate kar sakte hain.

// Jis tarah ham array ko merge krskte he. ishi tarah Javascript me Object me bhi ham Objects ko merge kr Skte he.

// const obj1 = {
//   name: "Qitmeer Raza",
//   age: 15,
//   email: "google@qitmeer.com",
// };
// const obj2 = {
//   name: "Muhammad Iqbal",
//   age: 55,
//   email: "google@iqbal.com",
// };

// let mergeObj = { obj1, obj2 }; // lekin ye object ke andar hamare object add kr raha he. ham chahte he ke poora object na add kre. blke ye sirf key OR value ko merge kree.

// let mergedObj = Object.assign({},obj2, obj1);

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

let user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  email: 'john.doe@example.com',
  isAdmin: false,
  address: {
      street: '123 Main Street',
      city: 'Anytown',
      zipCode: '12345'
  },
  hobbies: ['reading', 'coding', 'hiking']
};

// Agar Hamein Object ki Saari keys chahiye to.. jab ye return krta he to ye Array me ruturn krta he
// console.log(Object.keys(user));

// Agar Hamein Object ki Saari values chahiye to..  jab ye return krta he to ye Array me ruturn krta he
// console.log(Object.values(user));

// ye har keys or values ko eik eik Array me convert krdEta he
// console.log(Object.entries(user));

// Aggar Koi Key Find krnii Ho
console.log(user.hasOwnProperty('address'));

// -------------------------------------
// -------------------------------------
// -------------------------------------

/*

JavaScript me, "array of objects" ek data structure hai jisme ek array me multiple objects store hote hain. Har array element ek object hota hai, aur har object multiple key-value pairs (properties) ke saath define hota hai. Yeh ek common aur flexible way hai data ko organize karne ka.

Example:

```javascript
// Array of objects
var students = [
    { name: 'John', age: 20, grade: 'A' },
    { name: 'Alice', age: 22, grade: 'B' },
    { name: 'Bob', age: 21, grade: 'A-' }
];

// Accessing individual objects
console.log(students[0]); // Output: { name: 'John', age: 20, grade: 'A' }
console.log(students[1].name); // Output: 'Alice'

// Modifying object properties
students[2].grade = 'B+';
console.log(students[2]); // Output: { name: 'Bob', age: 21, grade: 'B+' }

// Adding a new object to the array
students.push({ name: 'Eve', age: 23, grade: 'A' });

// Iterating through the array of objects
for (var i = 0; i < students.length; i++) {
    console.log(students[i].name + ': ' + students[i].grade);
}
```

Is example me, `students` array har ek element me ek student ki details ko represent karta hai. Har student ka ek object hai jisme 'name', 'age', aur 'grade' keys hain. Aap array ko iterate karke har student ki details access kar sakte hain.

*/

