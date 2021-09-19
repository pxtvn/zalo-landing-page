const menuBtn = document.querySelector(".menu-btn");
const content = document.querySelector(".menu-content");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    content.classList.add("show");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    content.classList.remove("show");
    menuOpen = false;
  }
});

// collapse
const accordion = document.querySelectorAll(".button-collapse");
console.log(accordion);
accordion.forEach((accor) => {
  accor.addEventListener("click", () => {
    accor.classList.toggle("active");
  });
});

// line  string
  window.addEventListener("load", (event) => {
    var el = document.querySelectorAll(".highlights");

    var index = 0,
      length = el.length;
    for (; index < length; index++) {
var divHeight = el.offsetHeight
   var lineHeight = parseInt(el[index].style.lineHeight);
   var lines = divHeight / lineHeight;
   console.log("Lines: " +  divHeight);
      if (lines >= 2) {
        el[index].style.display = 'block'
      }
    }
  });
// window.addEventListener("load", () => {
//   var divHeight = el.length;

//   console.log(divHeight);

//   var lines = divHeight;
//   console.log("Lines: " + lines);
//   if (lines = 2) {

//   }
// });
