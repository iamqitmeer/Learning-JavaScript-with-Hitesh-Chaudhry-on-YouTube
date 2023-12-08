// Functions with objects and array in javascript

// Let's Example - Ham eik Banarahe he Exommerce App Or Waha Hamare User Bohot zyada items Cart kr raha he hamare page ko un tamam items ko price ko add krKe batana he. problem ye he ke user add to cart krege bohot zyada items ko ab hame to nhi patana ke ye kitne item ko add krege ham kitne parameters de. ye problem bohot commmon h. iska solution h.

// function addToCart(num) {
//   return console.log(num);
// }
// addToCart(100,200,300); // Ab Yahan hamare paas sirf pehli value arahi he.

// ab iska SOlution h rest operator
// Rest Operator Ko SPread operator bhi kehte he

// function addToCart(...num) {
//   return console.log(num);
// }

// addToCart(100, 200, 300, 4000); // Ab yahan hme mila tha Array

// AB ME AP KO DETAIL ME rest operator KE BAARE ME BATATAA HOO.

/*
JavaScript mein rest operator (`...`) ek special operator hai jo ek function ke parameters ya array destructuring mein use hota hai. Rest operator ka use variable length argument lists (jaise ki function mein kisi bhi number of arguments ko handle karna) aur array destructuring mein karna mein hota hai.

### Function Parameters mein Rest Operator:

Function ke parameters mein rest operator ka use karke, aap ek variable number of arguments ko handle kar sakte hain.

**Example:**
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

Yahan `...numbers` rest operator hai, jo function ko allow karta hai ki jitne bhi arguments pass kiye gaye hain, unhe ek array mein collect kare. Is example mein `sum` function ko jitne bhi arguments pass kiye jaenge, un sab ko ek array mein collect karke total calculate hoga.

### Array Destructuring mein Rest Operator:

Rest operator ka use array destructuring mein bhi kiya ja sakta hai, jise hum "rest element" kehte hain.

**Example:**
```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

Yahan `[first, second, ...rest]` mein `...rest` rest operator hai, jo baki ke array elements ko ek array mein collect kar deta hai. Is example mein, `rest` array mein `[3, 4, 5]` store hoga.

Rest operator ka istemal array destructuring ke sath karke aap easily array ke specific elements ko extract kar sakte hain aur baki ke elements ko ek variable mein store kar sakte hain.
*/

// Example
// Function Ke Andar Object Bhi Paas Hoskte he.

// function anyObj(obj) {
//   console.log(`Price is ${obj.price} and Kharidaar is ${obj.userName}`);
// }

// anyObj({
//   userName: "hiteshraza",
//   price: 400,
// })

// Function Ke Andar Object Bhi Paas Hoskte he.

function arrFunction(myNewArr) {
  console.log(`first price ${myNewArr[0]} & 2nd price ${myNewArr[2]} With ${myNewArr[3]} Rs.`);
}

arrFunction([100, 200, 300, 400])
