// DOM introduction in javascript
// DOM -- Document Object Model
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------


// console.dir(window.document);
// function btn() {
//     alert("Hey")
// }

// document.getElementById('title').style.backgroundColor = 'green'
// document.getElementById('title').style.color = '#fff'
// document.getElementById('title').style.padding = '10px'
// document.getElementById('title').style.margin = '10px'
// document.getElementById('title').style.fontWeight = 'bolder'

// console.log(
//     document.getElementById('title').outerHTML
// );

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

// DOM - Document Object Model

// The 3 Musketeers / Piller Of Web Development

// HTML

// Ye Hamari website ko structure deti he

// CSS

// Ye Hamari website ko design deti he

// Javascript

// Ye Hamari website ko logic deti he Means .  agar user registered ho gaya to kya krna chaHiye etc..


// What is DOM - Document Object Model ?
// when a web page loaded, the browser creates a Document Object Model ( DOM ) of the page

// JavaScript me, Document Object Model (DOM) ek programming interface hai jo web pages ko dynamic banane ke liye use hota hai. DOM ek hierarchical tree structure ko represent karta hai, jise hum web page elements ke liye use karte hain. Har HTML tag ek DOM element ko represent karta hai, aur in elements ko JavaScript ke through manipulate kiya ja sakta hai.

// DOM, web browsers ke andar hota hai, jise JavaScript use karke web pages ko modify karne me help karta hai without page reload kiye. Iske through, hum JavaScript se directly HTML elements ko access kar sakte hain, unhe modify kar sakte hain, ya new elements create kar sakte hain.

// DOM ke kuch important concepts hain:

// Document: Yeh sab kuch represent karta hai jo currently loaded web page me visible hai.

// Element: HTML tag ko represent karta hai, jaise ki <div>, <p>, <h1>, etc.

// Attribute: Element ke characteristics ko define karta hai, jaise ki id, class, src, etc.

// Node: DOM tree me ek point ko represent karta hai. Element, attribute, text, ya koi aur content ek node ho sakta hai.

// Event: DOM events, jaise ki click, mouseover, etc., ka interaction provide karte hain, jo humare JavaScript code ke execution ko trigger karte hain.

// console.dir(document.body.innerHTML);

// yaha pe choti si DOM ka example h.
// me chahta hoo ke agar background color change ho jaye JS ki help se

// let userInput = prompt("Background Color Name")
// document.body.style.background = userInput;

// Dom Manipulation
// Dom Manipulation krne se pehle hame maloom hona chahiye ke hame changes kis ke andar krni h.

// Start With Access The Element 

// 1 - Selecting With ID
// hamare HTML File me bohot zyada tag he hame unko seperate ID deni hogi jis ki help se ham use pakar payenge ya select kr payenge

// ham wo tag jisko JS ki help se manipulate krpaye ya koi logical kaam krwana hoto ham use eik ID de skte he. id means har class me har bache ka seperate roll number hota he 2 students ka same roll number nhi hota isHi tarah javascript me bhi har tag ka seperate ID hoti he


// let value = document.getElementById("button")
// console.log(value);

// isme sab se pehle document likhna he kyu ke hame batana he browser ko Element document se Select krna he. phir .getElementById means ke agar ham Element Select kr rahe he uski id ki help se to ham likh skte he .getElementById ( ab is ke andar hame id ka naam batana hoga )


// 2 - Selecting With Class

// Id Ki tarah class bhi kaam krta he. lekin ham eik ID doosri div ko de nhi skte he Or class de skte he. wese to id doosro ko bhi de skte he. lekin ye acchi aAdat nhii he

// let value = document.getElementsByClassName("main")
// console.log(value);

// ye hamare liye eik HTML Collection ko return krta he. similar to Array

// 3 - Selecting With Tag Name

// is me Tag ke name se access kr te he HTMK Element ko

// let myVar = document.getElementsByTagName("h1")
// console.log(myVar);

// Dom Ko Manipulate Krne ke liye ye 3 tareeqe Hote he 

// Selecting With Class
// Selecting With Id
// Selecting With Tag

// Lekin is se Achaa bhi eik tareeqa hota he. which is Called Query selector

// query Selector ke andar ham apni ID / Class / Tag 3 Paas kr skte he. or wo khud detect kr lega ke hame kis tareeqe ke elements chHiye

// let element = document.querySelector("h1")
// console.dir(element)

// ye sirf first wale ko log krwaae ga

// let elements = document.querySelectorAll("h1")
// console.dir(elements)

// .querySelectorAll -> ye hamare liye Node list return krta he. means node ki List 

// What is Node
// Hamare Jo DOM ka tree hota he usme har individual cheez hamare liye node ban jaaati he

// .querySelector ke baad ( ke andar hamein naam dena hta he 
// agar tag he to simple tag ka naam likhenge
// agar class hoto className se pehle . lagaenge
// agar Id hoto Id ke naame se pehle # lagaenge
// )

// let elementForDom = document.querySelector(".class-main");
// console.dir(elementForDom);

// Hamare Element ki Kuch Properties h. Jiski Value ham check bhi krskte he OR change bhi kr skte he. in Properties ki bases per ham value ko get ( Check Krna ) Or Set ( change ) bhi kr skte he 

// Properties

// -> Tag Name -- return tag for element nodes.

// let tagNameExmple = document.getElementById("para")
// console.log(tagNameExmple.tagName); // ye us element ka Tag Name De de ga

// -> InnerText -- returns the text content of the element and its children.

// let tagNameExmple = document.getElementById("para")
// console.log(tagNameExmple.innerText); // ye us element ke andar ka text nikal de ga

// -> InnerHtml -- return the plain text or HTML contents in the element

// let tagNameExmple = document.getElementsByClassName("main2")
// console.log(tagNameExmple.innerHTML); // ye us element ke plain text or HTML content nikal de ga

// let tagNameExmple = document.getElementById("para")
// tagNameExmple.innerText = "javascript wala paragraph"

// -> textContent -- returns textual content even for hidden element

// ye hidden element ka bhi text dikha de ga

// ------------------------------------------
// ------------------------------------------

// Let's practice

// Q1 - Create a H2 Heading Element with text - "Hello Javascript". Append "From Apna College Student" to this text using JS.

// let questionOne = document.querySelector("h1").append(" From Apna College Student")

// Q2 - Create 3 Dives with common className - "box". Access them & add some unique text to each of them

// let questionTwo = document.querySelectorAll(".box");

// let count = 0;
// for (pracc of questionTwo) {
//   pracc.innerText = `New Value ${count}`
//   count++;
// }


// ------------------------------------------
// ------------------------------------------
// ------------------------------------------

// DOM (Part 2) | Document Object Model 

// ------------------------------------------
 
// Attributes In DOM Manipulation

// --> getAttributes ( attr ) // to get the attributes value



// --> setAttributes (attr, value) // to set value the attribute val th

// let abc = document.querySelector("p");
// console.log(abc.setAttribute("class", "box"));

// Agar hamein JS ke andar reh ke new attribute banana he to setAttribute lage ga .setAttribute("yaha batana he ke attribute ki key, MTLB (Class, id, etc)","yaha batana hoga uski value means ke class ka naam OR Id ka naame" )

// ------------------------------------------

// Style In DOM Manipulation
// Node.style

// kisi bhi element ka style change krna ho jS ki file me reh ke

// let divStyle = document.querySelector(".box")
// divStyle.style.backgroundColor = "red"
// divStyle.style.color = "purple"
// divStyle.style.fontSize = "50px"
// divStyle.innerText = "purple"

// ------------------------------------------

// Insert Element In DOM Manipulation

// ye button create kiya he hamne Javascript ki help se

let newButton = document.createElement("button").innerText = "Click Me"

// lekin ye button screen pe show nhi horaha iske liye kuch methood hote he

// -> Node.append( el ) // adds at the end of node (inside)

// kisi hi element ke inside me ham last se kuch add krna chahte he to Node.append use hota he

// -> Node.prepend( el ) // adds at the start of node (inside)
// -> Node.before( el ) // adds before of node (outside)
// -> Node.after( el ) // adds after of node (outside)

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// DOM ka matlab hota hai Document Object Model. Ye JavaScript mein ek programming interface hai jo web pages ko represent karta hai. DOM ek hierarchical tree structure hoti hai, jisme har element ko ek node represent karta hai. Is tree structure mein HTML tags se lekar text content, attributes, events, sab kuch nodes ke roop mein represent hota hai.

// Jab aap ek web page ko load karte hain, browser DOM ko create karta hai. Phir aap JavaScript ka istemal karke is DOM ko manipulate kar sakte hain. Aap DOM ka istemal karke web page ke content, structure, aur style ko change kar sakte hain. Iske through, aap dynamic web pages create kar sakte hain, jisme content bina page ko refresh kiye badal sakta hai.

// Yadi aap ek example dekhna chahte hain, toh yeh ek simple HTML document ka example hai:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>DOM Example</title>
// </head>
// <body>

//   <h1 id="myHeading">Hello, DOM!</h1>
//   <button id="myButton">Click me</button>

//   <script>
//     // JavaScript code to manipulate the DOM
//     let heading = document.getElementById("myHeading");
//     heading.innerHTML = "New Heading Text";

//     let button = document.getElementById("myButton");
//     button.onclick = function() {
//       alert("Button clicked!");
//     };
//   </script>

// </body>
// </html>
// ```

// Is example mein, `document.getElementById` ka istemal karke JavaScript DOM API ka use kiya gaya hai, jisse hum heading aur button ko manipulate kar sakte hain.

// --------------------------------------------------------
// --------------------------------------------------------

// main ek basic diagram ke sath DOM ko explain karne ki koshish karunga. DOM ko tree structure mein represent kiya jata hai, jise hum ek "DOM Tree" kehte hain.

// Consider karein ki aapka ek simple sa HTML document hai:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>My Web Page</title>
// </head>
// <body>

//   <h1>Welcome to my website!</h1>
//   <p>This is a paragraph.</p>
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>

// </body>
// </html>
// ```

// Is HTML document ka corresponding DOM Tree kuch is tarah dikhega:

// ```
// - Document
//   - html
//     - head
//       - title
//         - TextNode: "My Web Page"
//     - body
//       - h1
//         - TextNode: "Welcome to my website!"
//       - p
//         - TextNode: "This is a paragraph."
//       - ul
//         - li
//           - TextNode: "Item 1"
//         - li
//           - TextNode: "Item 2"
//         - li
//           - TextNode: "Item 3"
// ```

// Yeh tree structure HTML document ke hierarchy ko darust darust represent karta hai. Har HTML element ko ek node ke roop mein represent kiya gaya hai. For example, `h1` element ka node `body` node ke niche hai, `ul` element ka node bhi `body` ke niche hai, aur har list item (`li`) ka node `ul` ke niche hai.

// Jab aap JavaScript ka istemal karte hain DOM ko manipulate karne ke liye, aap in nodes ko target kar sakte hain aur unhe modify kar sakte hain. Is tree structure ke through, aapko web page ke har element tak pahunchne ka ek systematic tareeka milta hai.

// --------------------------------------------------------
// --------------------------------------------------------

// JavaScript mein DOM selectors ka istemal karte waqt aap kisi bhi HTML element ko target kar sakte hain. Yahan kuch common DOM selectors hain:

// 1. **getElementById:**
//    - Is selector ka istemal kisi bhi element ko uske `id` ke through karna hota hai.
//    ```javascript
//    var element = document.getElementById("myId");
//    ```

// 2. **getElementsByClassName:**
//    - Is selector se aap ek ya multiple elements ko unke class ke basis par select kar sakte hain.
//    ```javascript
//    var elements = document.getElementsByClassName("myClass");
//    ```

// 3. **getElementsByTagName:**
//    - Is selector se aap ek ya multiple elements ko unke tag name ke basis par select kar sakte hain.
//    ```javascript
//    var elements = document.getElementsByTagName("div");
//    ```

// 4. **querySelector:**
//    - Is selector se aap CSS selectors ka istemal karke ek element ko select kar sakte hain. Ye sirf pehle mila element ko select karta hai.
//    ```javascript
//    var element = document.querySelector("#myId");
//    ```

// 5. **querySelectorAll:**
//    - Ye bhi CSS selectors ka istemal karta hai, lekin ye saare milte julte elements ko select karta hai.
//    ```javascript
//    var elements = document.querySelectorAll(".myClass");
//    ```

// 6. **getElementsByName:**
//    - Is selector ka istemal kisi bhi element ko uske `name` attribute ke through karna hota hai.
//    ```javascript
//    var elements = document.getElementsByName("myName");
//    ```

// In selectors ka istemal karke aap DOM mein se desired elements ko retrieve kar sakte hain, aur fir unko manipulate ya modify kar sakte hain. Ye selectors aapko web development mein flexible aur powerful tools dete hain.

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// JavaScript mein, DOM NodeList aur HTMLCollection dono HTML elements ka collection provide karte hain, lekin unmein kuch chhoti differences hain.

// ### DOM NodeList:

// 1. **NodeList Definition:**
//    - NodeList ek collection hoti hai jo DOM nodes ka ordered list (sequence) hai.
//    - NodeList dynamic hoti hai, yani agar aap DOM mein kuch change karte hain to NodeList automatically update hoti hai.

// 2. **NodeList Example:**
//    ```javascript
//    var nodeList = document.querySelectorAll('p'); // Example: Selects all <p> elements
//    ```

// 3. **Accessing Nodes in NodeList:**
//    - Aap NodeList ke elements ko index ke through access kar sakte hain.
//    - NodeList ko array ki tarah use kar sakte hain, lekin kuch array-specific methods available nahi hote.

// 4. **Dynamic Nature:**
//    - Agar aap DOM mein kuch add, remove, ya modify karte hain, to NodeList automatic update hoti hai.

// ### HTMLCollection:

// 1. **HTMLCollection Definition:**
//    - HTMLCollection bhi ek collection hoti hai jo DOM elements ka ordered list hai.
//    - HTMLCollection bhi dynamic hoti hai, lekin NodeList ke comparison mein kuch differences ho sakte hain.

// 2. **HTMLCollection Example:**
//    ```javascript
//    var htmlCollection = document.getElementsByClassName('example'); // Example: Selects elements with class 'example'
//    ```

// 3. **Accessing Nodes in HTMLCollection:**
//    - Aap HTMLCollection ke elements ko index ke through access kar sakte hain.
//    - HTMLCollection ko array ki tarah use kar sakte hain, lekin kuch array-specific methods available nahi hote.

// 4. **Live vs. Static:**
//    - **Live Collection:** By default, HTMLCollection live hoti hai, yani agar DOM mein kuch change hota hai to ye automatically update hoti hai.
//    - **Static Collection:** Some methods (like `querySelectorAll`) create a static HTMLCollection which does not update when the DOM changes.

// **Example of Using NodeList:**
// ```javascript
// var paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(function(paragraph) {
//   console.log(paragraph.textContent);
// });
// ```

// **Example of Using HTMLCollection:**
// ```javascript
// var elements = document.getElementsByClassName('example');
// for (var i = 0; i < elements.length; i++) {
//   console.log(elements[i].textContent);
// }
// ```

// In dono ka use aapke specific use case par depend karta hai. Agar aapko live updates chahiye hain, to NodeList ya dynamic HTMLCollection ka istemal karein, lekin agar aap static snapshot chahte hain, to `querySelectorAll` ka istemal karein ya fir HTMLCollection ko array mein convert karke use karein.

// Bilkul, main aapko kuch examples ke sath NodeList aur HTMLCollection ke elements ke baare mein bataunga:

// ### NodeList Example:

// Consider karein aapke HTML mein kuch paragraphs hain:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>NodeList Example</title>
// </head>
// <body>

//   <p>This is the first paragraph.</p>
//   <p>This is the second paragraph.</p>
//   <p>This is the third paragraph.</p>

//   <script>
//     var paragraphs = document.querySelectorAll('p');

//     // Iterating through NodeList elements
//     paragraphs.forEach(function(paragraph, index) {
//       console.log('Paragraph ' + (index + 1) + ': ' + paragraph.textContent);
//     });
//   </script>

// </body>
// </html>
// ```

// Yahan, `document.querySelectorAll('p')` se NodeList milta hai jo saare `<p>` elements ko represent karta hai. Fir, `forEach` method ka istemal karke har paragraph ka text content console par print kiya jata hai.

// ### HTMLCollection Example:

// Consider karein aapke HTML mein kuch elements hain jo ek particular class ke sath hain:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>HTMLCollection Example</title>
// </head>
// <body>

//   <div class="example">Element 1</div>
//   <div class="example">Element 2</div>
//   <div class="example">Element 3</div>

//   <script>
//     var elements = document.getElementsByClassName('example');

//     // Iterating through HTMLCollection elements
//     for (var i = 0; i < elements.length; i++) {
//       console.log('Element ' + (i + 1) + ': ' + elements[i].textContent);
//     }
//   </script>

// </body>
// </html>
// ```

// Yahan, `document.getElementsByClassName('example')` se HTMLCollection milta hai jo saare elements ko represent karta hai jinme class "example" hai. Fir, `for` loop ka istemal karke har element ka text content console par print kiya jata hai.

// Dono hi examples mein, aap NodeList aur HTMLCollection se elements ko access karke unke properties aur methods ka istemal kar sakte hain.


// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// Element ki value ko change karne ke liye aap `value` property ko update kar sakte hain. Yahan kuch examples hain jo aapko is process ko samajhne mein madad karenge:

// ### 1. Text Input Element:

// Yadi aap ek text input element ki value ko change karna chahte hain, to aap `value` property ka istemal kar sakte hain:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Change Value Example</title>
// </head>
// <body>

//   <input type="text" id="myInput" value="Initial Value">
//   <button onclick="changeInputValue()">Change Value</button>

//   <script>
//     function changeInputValue() {
//       var inputElement = document.getElementById('myInput');
//       inputElement.value = 'New Value';
//     }
//   </script>

// </body>
// </html>
// ```

// Is example mein, `changeInputValue` function ke andar `value` property ko update karke text input ki value ko badla gaya hai.

// ### 2. Text Content of an Element:

// Agar aap kisi element ka text content change karna chahte hain, to aap `textContent` property ka istemal kar sakte hain:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Change Text Content Example</title>
// </head>
// <body>

//   <p id="myParagraph">Original Text</p>
//   <button onclick="changeTextContent()">Change Text</button>

//   <script>
//     function changeTextContent() {
//       var paragraphElement = document.getElementById('myParagraph');
//       paragraphElement.textContent = 'New Text';
//     }
//   </script>

// </body>
// </html>
// ```

// Yahan, `changeTextContent` function ke andar `textContent` property ka istemal karke paragraph element ka text content badla gaya hai.

// ### 3. Changing Attribute Value:

// Agar aap kisi attribute ki value ko change karna chahte hain, to aap `setAttribute` method ka istemal kar sakte hain:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Change Attribute Example</title>
// </head>
// <body>

//   <img id="myImage" src="image.jpg" alt="An example image">
//   <button onclick="changeImageSource()">Change Image Source</button>

//   <script>
//     function changeImageSource() {
//       var imageElement = document.getElementById('myImage');
//       imageElement.setAttribute('src', 'new_image.jpg');
//     }
//   </script>

// </body>
// </html>
// ```

// Yahan, `changeImageSource` function ke andar `setAttribute` method ka istemal karke `src` attribute ki value ko badla gaya hai.

// In examples mein dikhaya gaya hai ki aap kaise JavaScript ke through DOM elements ke properties aur attributes ko modify kar sakte hain.

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// DOM elements ke kai properties hote hain, jo unke attributes, styles, aur states ko represent karte hain. Yahan kuch common properties hain jo aapko ek DOM element ke saath mil sakte hain:

// ### Common Properties:

// 1. **innerHTML:**
//    - Element ke andar ka HTML content ko represent karta hai.

// 2. **innerText:**
//    - Element ke andar ka text content ko represent karta hai.

// 3. **textContent:**
//    - Element ke andar ka text ya HTML content ko represent karta hai.

// 4. **id:**
//    - Element ka unique identifier.

// 5. **className or classList:**
//    - Element ke CSS class name(s).

// 6. **style:**
//    - Element ke inline CSS styles ko access karne aur modify karne ke liye.

// ### Attributes:

// 7. **getAttribute():**
//    - Element ke kisi specific attribute ki value ko retrieve karne ke liye.

// 8. **setAttribute():**
//    - Element ke kisi specific attribute ki value ko set karne ke liye.

// ### Dimensions:

// 9. **clientWidth, clientHeight:**
//    - Element ke visible area ka width aur height.

// 10. **offsetWidth, offsetHeight:**
//     - Element ke width aur height ke saath padding, border, aur scrollbar ko include karte hain.

// 11. **scrollWidth, scrollHeight:**
//     - Element ke content ka total scrollable width aur height.

// ### Positioning:

// 12. **offsetParent:**
//     - Element ka nearest positioned ancestor element.

// 13. **offsetTop, offsetLeft:**
//     - Element ka distance offsetParent se top aur left mein.

// ### Events:

// 14. **onclick, onmouseover, onkeydown, etc.:**
//     - Different events ke liye event handlers.

// ### Form Elements:

// 15. **value:**
//     - Form elements (input, textarea) ke liye current value.

// 16. **checked:**
//     - Checkbox aur radio buttons ke checked state ko represent karta hai.

// ### Other:

// 17. **nodeName:**
//     - Element ka node name (e.g., "DIV").

// 18. **nodeType:**
//     - Element ka node type (e.g., 1 for element nodes).

// 19. **parentNode:**
//     - Element ka parent node.

// 20. **childNodes:**
//     - Element ke child nodes ka NodeList.

// Yeh properties ek element ke behavior, appearance, aur state ko describe karte hain. Aap in properties ka istemal karke DOM manipulation kar sakte hain aur web page ko dynamic banane mein madad le sakte hain.

// "innerHTML," "innerText," aur "textContent" teeno hi JavaScript properties hain jo DOM elements ke content ko represent karte hain, lekin unmein kuch differences hain:

// ### 1. innerHTML:

// - **Property Type:** innerHTML ek property hai jo ek element ke andar ka HTML content ko represent karta hai.
// - **Manipulation:** Aap innerHTML ka istemal karke HTML content ko modify kar sakte hain. Is property mein HTML tags bhi include hote hain.
// - **Security Consideration:** innerHTML se content add karte waqt XSS (Cross-Site Scripting) attacks ka khatra hota hai, isliye user input ko directly innerHTML mein include karne se bacha jana chahiye.

// **Example:**
// ```javascript
// var element = document.getElementById('myElement');
// element.innerHTML = '<strong>New Content</strong>';
// ```

// ### 2. innerText:

// - **Property Type:** innerText bhi ek property hai jo ek element ke andar ka text content ko represent karta hai.
// - **Manipulation:** Aap innerText ka istemal karke only text content ko modify kar sakte hain. HTML tags ko ignore kiya jata hai.
// - **Performance:** innerText, text content ke manipulations mein innerHTML ke comparison mein thoda efficient ho sakta hai.

// **Example:**
// ```javascript
// var element = document.getElementById('myElement');
// element.innerText = 'New Text Content';
// ```

// ### 3. textContent:

// - **Property Type:** textContent bhi ek property hai jo ek element ke andar ka text content ko represent karta hai.
// - **Manipulation:** Aap textContent ka istemal karke HTML content ya text content ko modify kar sakte hain. Is property mein HTML tags bhi include hote hain, lekin innerHTML ki tarah dynamic script execution nahi hoti.
// - **Cross-Site Scripting:** textContent se user input ko include karne mein innerHTML ke comparison mein security risk kam hota hai.

// **Example:**
// ```javascript
// var element = document.getElementById('myElement');
// element.textContent = 'New Text or HTML Content';
// ```

// ### Summary:

// - Agar aapko HTML content modify karna hai aur aap XSS risks ka dhyan rakh sakte hain, to innerHTML ka istemal karein.
// - Agar aapko sirf text content modify karna hai, to innerText ka istemal karein.
// - Agar aapko text ya HTML content modify karna hai aur aap XSS risks se bachna chahte hain, to textContent ka istemal karein.

