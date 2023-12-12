// JavaScript code browser mein runtime mein kaise execute hota hai, isme kuch steps hote hain:

// 1. **HTML Document:**
//    Sabse pehle, ek HTML document create karo jisme `<script>` tag ke andar ya external JavaScript file ke through JavaScript code include kiya jaye.

//    Example using inline JavaScript:
//    ```html
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>JavaScript Runtime</title>
//    </head>
//    <body>
//        <script>
//            // Your JavaScript code goes here
//            console.log("Hello, world!");
//        </script>
//    </body>
//    </html>
//    ```

//    Example using external JavaScript file:
//    ```html
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>JavaScript Runtime</title>
//        <script src="your_script.js"></script>
//    </head>
//    <body>
//        <!-- Your HTML content -->
//    </body>
//    </html>
//    ```

// 2. **Browser Load:**
//    Jab aap apne HTML document ko browser mein open karte hain, browser HTML aur associated resources ko load karta hai.

// 3. **JavaScript Execution:**
//    Jab browser JavaScript code se milta hai, woh use execute karta hai. Agar code `<script>` tag ke andar hai toh wo direct execute hota hai. Agar external file se link kiya gaya hai toh browser use download karta hai aur execute karta hai.

//    Example JavaScript code:
//    ```javascript
//    // your_script.js
//    console.log("Hello, world!");
//    ```

// 4. **Output:**
//    JavaScript code ke output ko aap developer tools ke console mein dekh sakte hain. Iske liye aap browser ke inspect mode mein ja kar console tab par ja sakte hain.

// Yeh process runtime mein hota hai, kyunki JavaScript dynamically manipulate kar sakta hai DOM (Document Object Model) aur interact kar sakta hai user ke actions ke sath.


// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------


// JavaScript ek client-side programming language hai, jo primarily browser mein run hota hai. Jab aap ek web page open karte hain, HTML aur CSS se saath mein JavaScript bhi download hota hai. JavaScript parde ke peeche kaise kaam karta hai, iska process niche diye gaye steps mein hota hai:

// 1. **Code Download:**
//    Browser HTML document parse karta hai aur jab woh `<script>` tag ya external JavaScript file se milta hai, toh use download karta hai.

// 2. **Execution Context:**
//    Jab JavaScript code execute hota hai, ek execution context create hota hai. Yeh context function scope, variables, objects, aur kuch aur important details ko store karta hai.

// 3. **Execution of Code:**
//    JavaScript code line by line execute hota hai. Agar koi function call hota hai toh ek naya execution context create hota hai us function ke liye. Functions, loops, conditions, etc., sab execute hote hain.

// 4. **DOM Manipulation:**
//    JavaScript ka ek important aspect hai DOM (Document Object Model) manipulation. JavaScript ke through, aap HTML aur CSS ko dynamically manipulate kar sakte hain. For example, elements ko add, remove, ya modify kar sakte hain, events ko handle kar sakte hain, etc.

// 5. **Asynchronous Operations:**
//    JavaScript asynchronous programming support karta hai. Iska mtlb hai ki kuch operations background mein chal sakti hain aur user ke interaction ke liye wait nahi karna padta. Ismein `setTimeout`, `setInterval`, aur AJAX calls jaise concepts shamil hain.

// 6. **Event Handling:**
//    JavaScript event-driven programming language hai. Iska mtlb hai ki woh user ke actions ka wait karta hai aur jab koi event occur hota hai (jaise ki button click, mouse hover, etc.), toh associated code execute hota hai.

// 7. **AJAX (Asynchronous JavaScript and XML):**
//    AJAX allows asynchronous communication with the server. Iske through, aap server se data asynchronously retrieve kar sakte hain bina puri page ko reload kiye.

// 8. **Security:**
//    JavaScript is sandboxed, meaning it has limitations on accessing resources outside of its environment for security reasons. This prevents malicious activities from JavaScript code.

// Yeh process collectively JavaScript ko ek powerful language banata hai, jiska use interactive web pages banane mein hota hai. Iske through, aap user ke actions ka response de sakte hain, dynamic content create kar sakte hain, aur user experience ko enhance kar sakte hain.

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

// JavaScript ke execution ke baare mein interviewer ke perspective se, kuch key points hain jo aap discuss kar sakte hain:

// 1. **Single-Threaded Nature:**
//    JavaScript single-threaded hota hai, mtlb ek hi thread mein code execute hota hai. Iska mtlb hai ki ek samay mein ek hi task ho sakta hai. Isme ek main thread hota hai jo code ko line by line execute karta hai.

// 2. **Event Loop:**
//    Event Loop JavaScript ka ek important concept hai. Event Loop constantly check karta hai ki koi new event toh nahi hua hai jaise ki user input, timer completion, ya network response. Event Loop ensure karta hai ki single thread par kaam karte hue bhi asynchronous tasks ko efficiently manage kiya ja sake.

// 3. **Callback Queue:**
//    Callback queue ek mechanism hai jisse async tasks ko manage kiya jata hai. Jab koi asynchronous task complete hota hai, woh callback queue mein chala jata hai aur jab event loop empty hota hai, toh woh task execute hota hai.

// 4. **Promises:**
//    Promises ek pattern hain jisse aap asynchronous code ko manage kar sakte hain. Ye ek standardized way hai async operations handle karne ka, jisse callback hell se bacha ja sake.

// 5. **Hoisting:**
//    JavaScript mein hoisting hota hai, jisse variables aur functions ke declarations ho jate hain before code execution. Lekin, values assign hone se pehle, undefined rehta hai.

// 6. **Closures:**
//    Closures ka concept interview mein common hota hai. Closures allow functions to access variables from their outer scope even after the outer function has finished executing. Yeh powerful feature hai aur code maintainability mein help karta hai.

// 7. **Scope Chain:**
//    JavaScript mein scope ka chain hota hai, jisse variables ko access kiya ja sakta hai. Agar koi variable local scope mein nahi milta, toh uski search outer scopes mein hoti hai.

// 8. **Memory Management:**
//    JavaScript automatic garbage collection ka use karta hai. Unused variables aur objects ko identify karke, woh memory se free kar deta hai.

// 9. **Web APIs:**
//    Browser environment ke andar, JavaScript Web APIs ke sath interact karta hai jaise ki DOM APIs, AJAX, setTimeout, setInterval, etc. In APIs se aap asynchronous tasks manage kar sakte hain.

// 10. **Error Handling:**
//     JavaScript mein try-catch blocks ka use errors handle karne ke liye hota hai. Proper error handling code likhna aur unexpected errors ko identify karna important hai.

// In points ko cover karke aap interviewer ko dikha sakte hain ki aap JavaScript execution process aur concepts ko achhe se samajhte hain.