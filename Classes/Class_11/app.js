// Date and time in depth in javascript

// -----------------------
// Date In Javascript

let myDate = new Date();
console.log(Date());
// console.log(myDate); // is ka output bilkul bhi readable nhii he
// Try Krte he isko string me convert krne ka
// console.log(myDate.toString()); // is ka output bhi same he upar wale se

// Ham Use krte he Method Jo Date ko Kisi Formet me convert krta he.

// console.log(" .toLocaleDateString() ", myDate.toLocaleString());
// console.log(" .toDateString ", myDate.toDateString());

// Date Ka Typeof Agar Check kre to kya ata he
// console.log(typeof myDate); // Object

// JavaScript me date ek object isliye hota hai taki aap date-related operations ko easily perform kar sakein. JavaScript me Date object provide karta hai jisse aap current date and time ko obtain kar sakte hain, ya aap specific date and time ko represent karne ke liye use kar sakte hain.

// Agar Hamein Koi specific date hi Diclear krni he to?

// let mySpecificDate = new Date(2023, 2, 23,2);
// console.log(mySpecificDate.toDateString());
// console.log(mySpecificDate.toLocaleDateString());

// let myTimeStamps = Date.now()
// console.log(myTimeStamps); // ye mili second return krta he

// agar me eik date likhta hoo aAj se kuch din pehle ka. aur me janNa chata hoo ke tab se leke abhi tk kitne second huee. to me use kr skta hoo .getTime

let myDateCreation = new Date ("05-14-2023")
// console.log(myDateCreation.toDateString());

// Mene Past Date Banadii he.. Ab bAaari he Tab se leke abhi tk ka time dekhne ka ke kitne seconds hue he.

console.log(
    myDateCreation.getTime()
    );

// Output -- Thu Mar 23 2023

// Agar hamein Kuhud date batani hoto sab se pehle new Date ()
// Round bracket ke anadar pehle year likhte he. e.g. 2023
// Phir Month batate he e.g. 2.  Month Ka Naam 0 se start hota he. means ke 0 e aye ga Jan, 1 e aye ga Feb isHi tarah Countinue
// phir date likhte he e.g. 20
// Js Khud din ka naam batade ga. wo hamein batane ki jroooooorat nhii he
// Or Bhi isme ham likh skte he
// Date(year: number, monthIndex: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined): Date


// toString() Thu Nov 30 2023 14:04:42 GMT+0500 (Pakistan Standard Time)
// app.js:12 toTimeString() 14:04:42 GMT+0500 (Pakistan Standard Time)
// app.js:13 toUTCString() Thu, 30 Nov 2023 09:04:42 GMT
// app.js:14 toDateString() Thu Nov 30 2023
// app.js:15 toJSON() 2023-11-30T09:04:42.051Z
// app.js:16 toLocaleDateString() 11/30/2023
// app.js:17 toTimeString 14:04:42 GMT+0500 (Pakistan Standard Time)

// -----------------------
// Time In Javascript

// JavaScript mein time kaam karne ka tareeka kaafi straightforward hai. Aap JavaScript mein time ke saath kaam karne ke liye kuch built-in objects ka istemal kar sakte hain. Yahan kuch basic concepts hain:

// 1. **Date Object:**
//    JavaScript mein `Date` object ka istemal current date aur time ko represent karne ke liye hota hai. Aap is object ko create karke current date aur time ko access kar sakte hain.

//    ```javascript
//    Current date and time
//    var currentDate = new Date();
//    console.log(currentDate);
//    ```

// 2. Date Methods:
//    `Date` object ke saath kuch useful methods hote hain jinse aap specific date aur time ko access kar sakte hain.

//    ```javascript
//    var currentDate = new Date();

//    // Get individual components
//    var year = currentDate.getFullYear();
//    var month = currentDate.getMonth(); // Month starts from 0 (0-11)
//    var day = currentDate.getDate();
//    var hours = currentDate.getHours();
//    var minutes = currentDate.getMinutes();
//    var seconds = currentDate.getSeconds();

//    console.log(year, month, day, hours, minutes, seconds);
//    ```

// 3. Set Methods:
//    `Date` object ke saath aap date aur time ko set karne ke liye bhi methods ka istemal kar sakte hain.

//    ```javascript
//    var futureDate = new Date();
   
//    // Set a future date (year, month, day, hours, minutes, seconds)
//    futureDate.setFullYear(2023);
//    futureDate.setMonth(11); // December (0-11)
//    futureDate.setDate(31);
//    futureDate.setHours(23);
//    futureDate.setMinutes(59);
//    futureDate.setSeconds(59);

//    console.log(futureDate);
//    ```

// 4. **Interval and Timeout:**
//    `setInterval` aur `setTimeout` functions ka istemal karke aap specific intervals par code ko execute kar sakte hain.

//    ```javascript
//    // setInterval example
//    setInterval(function() {
//        console.log("This will be logged every 1000 milliseconds");
//    }, 1000);

//    // setTimeout example
//    setTimeout(function() {
//        console.log("This will be logged after 3000 milliseconds");
//    }, 3000);
//    ```

// Ye basic concepts hain jo JavaScript mein time ke saath kaam karne ke liye istemal hote hain. Iske alawa, kai third-party libraries bhi available hain jo time aur date ke advanced manipulations ko facilitate karte hain.