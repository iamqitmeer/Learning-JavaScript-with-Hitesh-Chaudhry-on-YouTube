// How to create a new element in DOM
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

// Bilkul, main step-by-step detail me samjha raha hoon. Naye element create karne ke liye, aapko `document.createElement` ka istemal karna padta hai. Ye method ek naya DOM element banata hai, jise aap phir modify karke existing DOM tree mein add kar sakte hain.

// Yahan ek detail me samjha hua example hai:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Create Element Example</title>
// </head>
// <body>

//   <div id="container">
//     <!-- Existing elements in the container -->
//     <p>This is an existing paragraph.</p>
//   </div>

//   <script>
//     // Step 1: Create a new paragraph element
//     var newParagraph = document.createElement('p');

//     // Step 2: Set text content for the new paragraph
//     newParagraph.textContent = 'This is a new paragraph created with JavaScript!';

//     // Step 3: Get the container element where you want to append the new paragraph
//     var container = document.getElementById('container');

//     // Step 4: Append the new paragraph to the container
//     container.appendChild(newParagraph);
//   </script>

// </body>
// </html>
// ```

// ### Steps Explained:

// 1. **Create a new paragraph element:**
//    ```javascript
//    var newParagraph = document.createElement('p');
//    ```
//    Yahan, `document.createElement('p')` se ek naya `<p>` element create hota hai aur `newParagraph` variable mein store ho jata hai.

// 2. **Set text content for the new paragraph:**
//    ```javascript
//    newParagraph.textContent = 'This is a new paragraph created with JavaScript!';
//    ```
//    Hum `textContent` property ka istemal karke naye paragraph ke text content ko set karte hain.

// 3. **Get the container element:**
//    ```javascript
//    var container = document.getElementById('container');
//    ```
//    `getElementById` method se hum container element ko retrieve karte hain jahan hum naya paragraph add karna chahte hain. Yahan, `container` variable mein store ho jata hai.

// 4. **Append the new paragraph to the container:**
//    ```javascript
//    container.appendChild(newParagraph);
//    ```
//    `appendChild` method ka istemal karke hum naye paragraph ko container element ke andar add karte hain.

// Iss tarah se aap JavaScript ka istemal karke naye elements create kar sakte hain aur unhe DOM mein add karke dynamic web pages develop kar sakte hain.











let abc = document.querySelector('.parent');
abc.children[1]











// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
