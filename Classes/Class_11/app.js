// Date and time in depth in javascript

// -----------------------
// Date In Javascript

let myDate = new Date();
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
