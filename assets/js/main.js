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
function onclickss3() {
  window.scroll(0, findPos(document.getElementById("ss3")));
}
function onclickss4() {
  window.scroll(0, findPos(document.getElementById("ss4")));
}
function onclickss5() {
  window.scroll(0, findPos(document.getElementById("ss5")));
}
// Finds y value of given object
function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      document.getElementsByClassName("sticky-menu")[0].style.top = "60px";
      curtop += obj.offsetTop - 70;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}
let newValue = 0;
window.addEventListener("scroll", (e) => {
  var getHeightY = document.querySelector("#ss1");
  var getHeightY2 = document.querySelector("#ss2");
  var getHeightY3 = document.querySelector("#ss3");
  var getHeightY4 = document.querySelector("#ss4");
  var getHeightY5 = document.querySelector("#ss5");
  var getHeightYFooter = document.getElementsByClassName("footer")[0];

  if (getHeightY) {
    var sticky = getHeightY.offsetTop;
  }
  if (getHeightY2) {
    var sticky2 = getHeightY2.offsetTop;
  }
  if (getHeightY3) {
    var sticky3 = getHeightY3.offsetTop;
  }
  if (getHeightY4) {
    var sticky4 = getHeightY4.offsetTop;
  }
  if (getHeightY5) {
    var sticky5 = getHeightY5.offsetTop;
  }

  var stickyFooter = getHeightYFooter.offsetTop;
  var a = document.getElementsByClassName("sticky-menu")[0];

  newValue = window.scrollY;
  if (sticky) {
    if (sticky < newValue + 170) {
      a.classList.add("show");
      a.style.display = "block";
      document.getElementById("change-text").innerHTML = document.querySelector("#p1").textContent;
    } else {
      a.classList.remove("show");
      a.style.display = "none";
    }
  }

  if (sticky2) {
    if (sticky2 < newValue + 140) {
      document.getElementById("change-text").innerHTML = document.querySelector("#p2").textContent;
    }
  }

  if (sticky3) {
    if (sticky3 < newValue + 140) {
      document.getElementById("change-text").innerHTML = document.querySelector("#p3").textContent;
    }
  }
  if (sticky4) {
    if (sticky4 < newValue + 140) {
      document.getElementById("change-text").innerHTML = document.querySelector("#p4").textContent;
    }
  }

  if (sticky5) {
    if (sticky5 < newValue + 140) {
      document.getElementById("change-text").innerHTML =
        document.querySelector("#p5").textContent;
    }
  }

  if (stickyFooter < newValue + 240) {
    a.classList.remove("show");
    a.style.display = "none";
  }
});
