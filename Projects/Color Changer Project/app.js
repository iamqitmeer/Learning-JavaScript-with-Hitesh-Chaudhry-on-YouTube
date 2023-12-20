let myBtn = document.querySelectorAll(".btn");
// console.log(myBtn);
let bdyBody = document.querySelector("body");
// console.log(bdyBody);

myBtn.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    console.log(e.target.id);
    if ((e.target.id == "box1")) {
      bdyBody.style.backgroundColor = "rgb(119, 255, 0)";
    } else if (e.target.id == "box2") {
      bdyBody.style.backgroundColor = "red";
    } else if (e.target.id == "box3") {
      bdyBody.style.backgroundColor = "blue";
    } else if (e.target.id == "box4") {
      bdyBody.style.backgroundColor = "rgb(148, 112, 5)";
    }
  });
});