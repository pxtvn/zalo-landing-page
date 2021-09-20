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
accordion.forEach((accor) => {
  accor.addEventListener("click", () => {
    accor.classList.toggle("active");
  });
});

// line  string
// window.addEventListener("load", (event) => {
//   var el = document.querySelectorAll(".highlights");

//   var index = 0,
//     length = el.length;
//   for (; index < length; index++) {
//     var divHeight = el.offsetHeight;
//     var lineHeight = parseInt(el[index].style.lineHeight);
//     var lines = divHeight / lineHeight;
//     console.log("Lines: " + divHeight);
//     if (lines >= 2) {
//       el[index].style.display = "block";
//     }
//   }
// });
// get scroll position in px
function onclickss1() {
  window.scroll(0, findPos(document.getElementById("ss1")));
}
function onclickss2() {
  window.scroll(0, findPos(document.getElementById("ss2")));
}
// Finds y value of given object
function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      document.getElementsByClassName("sticky-menu")[0].style.top = "60px";
      curtop += obj.offsetTop - 83;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}
let newValue = 0;
window.addEventListener("scroll", (e) => {
  var getHeightY = document.getElementById("ss1");
  var getHeightY2 = document.getElementById("ss2");

  var sticky = getHeightY.offsetTop;
  var sticky2 = getHeightY2.offsetTop;
  var a = document.getElementsByClassName("sticky-menu")[0];

  var text = document.getElementById("p1").textContent;
  // document.getElementById("p2").textContent

  newValue = window.scrollY;
  console.log(text);
  if (sticky < newValue + 160) {
    a.classList.add("show");
    setTimeout(function () {
      a.style.display = "block";
    }, 200);
    document.getElementById("change-text").innerHTML = text;
    console.log("Up");
  } else {
    a.classList.remove("show");
    a.style.display = "none";
    console.log("Down");
  }
  console.log(sticky, newValue);
});

// window.addEventListener("scroll", (e) => {
//   var getHeightMenu = document.getElementsByClassName("menu")[0];
//   var parentMenu = document.getElementsByClassName("menu-wrap")[0];
//   console.log(getHeightMenu, parentMenu);
//   var scroll = window.scrollY;
//   if (scroll > 70) {
//     getHeightMenu.style.top = "-10px";
//   } else {
//     getHeightMenu.style.top = "0px";
//   }
// });
