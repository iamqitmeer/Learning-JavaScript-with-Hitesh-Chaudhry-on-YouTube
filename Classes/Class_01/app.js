const myFather = 'Muhammad Iqbal'
var myName = 'Qitmeer Raza'
let myFriends = 'Xyz'

myFriends = 'Anus'

// Prefer not to use var because of issue in block scope and functional scope

function Friends() {
    console.log("My Friends Change Name");
    console.log(myFriends)
}
Friends()

console.table([myFather, myFriends, myName])


// Undefined -- agar javascript me ham varieble banake chor dete he iski koi value nhi dete to javascript use undefined manti h


// Theory --- Let, const and var ki kahani | chai aur #javascript

// Let, const, aur var teeno JavaScript mein variables declare karne ke liye istemal hoti hain, lekin in teeno mein kuch farq hota hai.

// 1. **var:** Var JavaScript mein variable declare karne ke liye purane tareeqe se istemal hota hai. Ismein variable ko declare karne se pehle bhi istemal kiya ja sakta hai. Var keyword se declare kiya gaya variable globally scoped hota hai ya function scoped hota hai, iska matlab hai ki var ke dwara declare kiya gaya variable puri file ya function ke andar accessible hota hai.

// 2. **let:** Let keyword ko newer JavaScript versions mein introduce kiya gaya hai. Ye block scoped hota hai, jo matlab hai ki iska scope wo block hota hai jismein ye declare kiya gaya hai, jaise ki koi loop ya if statement. Let variable ko uss block ke bahar access nahi kiya ja sakta.

// 3. **const:** Const bhi block scoped hota hai jaise let, lekin iska ek mukhya farq ye hai ki const ek constant variable ko represent karta hai, jo ek baar declare hone ke baad uski value change nahi ki ja sakti. Iska matlab hai ki agar ek variable ko const keyword se declare kiya gaya hai, toh uski value constant rehti hai aur usse baad mein change nahi kiya ja sakta.

// Ismein, var ko global scope ki wajah se avoid kiya ja raha hai aur let aur const ko block scope aur immutable (const ke case mein) properties ki wajah se prefer kiya ja raha hai. Yeh badlav JavaScript ke latest versions mein aaye hain taki code maintain karna aur bugs ko kam karna asaan ho sake.