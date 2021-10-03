const menuBtn = document.querySelector(".menu-btn");
const content = document.querySelector(".menu-content");
let menuOpen = false;
menuBtn.addEventListener("click", (e) => {
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

//chheck width body header
if (window.innerWidth > 1024) {
  const header = document.querySelector(".accordion__header");
  const body = document.querySelector(".accordion__body");
  window.addEventListener("load", () => {
    if (header.offsetWidth > body.offsetWidth) {
      body.style.width = "100%";
    }
  });
}
// collapse
const accordion = document.querySelectorAll(".button-collapse");
// accordion.forEach((accor) => {
//   accor.addEventListener("click", (e) => {
//     accor.classList.toggle("active");
//   });
// });
// var header = document.getElementById("myDIV");
for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function(e) {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    this.className += " active";
  });
}

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
      curtop += obj.offsetTop - 70;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}
// let newValue = 0;
if (window.innerWidth < 600) {
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
        document.getElementById("change-text").innerHTML =
          document.querySelector("#p1").textContent;
      } else {
        a.classList.remove("show");
      }
    }

    if (sticky2) {
      if (sticky2 < newValue + 140) {
        document.getElementById("change-text").innerHTML =
          document.querySelector("#p2").textContent;
      }
    }

    if (sticky3) {
      if (sticky3 < newValue + 140) {
        document.getElementById("change-text").innerHTML =
          document.querySelector("#p3").textContent;
      }
    }
    if (sticky4) {
      if (sticky4 < newValue + 140) {
        document.getElementById("change-text").innerHTML =
          document.querySelector("#p4").textContent;
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
    }
  });
}

// fix scroll nav menu in desktop
if (window.innerWidth > 601) {
  const sections = document.querySelectorAll(".section");
  const navLi = document.querySelectorAll("nav .container-nav ul li");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 140) {
        current = section.getAttribute("id");
      }
    });
    
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });
}

// #click to rate
const good = document.getElementById("good");
const bad = document.getElementById("bad");
const showNoti = document.querySelector(".section-detail .notify");

if (good) {
  good.addEventListener("click", (e) => {
    good.classList.toggle("active");
    if (good.classList.contains("active")) {
      showNoti.style.display = "block";
      bad.classList.remove("active");
    } else {
      showNoti.style.display = "none";
    }
  });
}
if (bad) {
  bad.addEventListener("click", (e) => {
    bad.classList.toggle("active");
    if (bad.classList.contains("active")) {
      showNoti.style.display = "block";
      good.classList.remove("active");
    } else {
      showNoti.style.display = "none";
    }
  });
}

// inform check step
if (window.innerWidth < 600) {
  const prevStep = document.getElementById("prev-step");
  const nextStep = document.getElementById("next-step");
  if (prevStep) {
    prevStep.addEventListener("click", function (e) {
      var getStep1 = document.getElementsByClassName("step-1")[0];
      var getStep2 = document.getElementsByClassName("step-2")[0];
      var getPrevBtn = document.getElementsByClassName("prev-button")[0];
      var pagi = document.getElementsByClassName("pagination-circle")[0];
      var pagi2 = document.getElementsByClassName("pagination-circle")[1];
      pagi2.classList.remove("active");
      pagi.classList.add("active");
      getStep2.classList.add("hide");
      getPrevBtn.classList.add("disabled");
      getStep1.classList.remove("hide");
      console.log("click");
    });
  }
  
  if (nextStep) {
    nextStep.addEventListener("click", function (e) {
      var getStep1 = document.getElementsByClassName("step-1")[0];
      var getStep2 = document.getElementsByClassName("step-2")[0];
      var getPrevBtn = document.getElementsByClassName("prev-button")[0];
      var pagi = document.getElementsByClassName("pagination-circle")[0];
      var pagi2 = document.getElementsByClassName("pagination-circle")[1];
      getStep1.classList.add("hide");
      pagi.classList.remove("active");
      pagi2.classList.add("active");
      getPrevBtn.classList.remove("disabled");
      getStep2.classList.remove("hide");
    });
  }
}
// active button form
var list = document.querySelectorAll(".button-choose");
var btnRegister = document.getElementById("btn-register");
const limit = 3;

list.forEach((item) => {
  item.addEventListener("click", (e) => {
    const currentActiveValue = item.classList.contains("active");
    if (currentActiveValue) {
      item.classList.toggle("active");
    } else {
      if (
        [...list].filter((e) => e.classList.contains("active")).length < limit
      ) {
        item.classList.toggle("active");
      } else {
        // alert("Chọn tối đa 3 nội dung..")
        return;
      }
    }
    checkRegisterButton();
  });
});

function checkRegisterButton() {
  btnRegister.disabled = ![...list].some((e) => e.classList.contains("active"));
}

// custom select
const selectedAll = document.querySelectorAll(".select-styled");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  // const searchBox = selected.nextElementSibling;

  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");
    } else {
      let currentActive = document.querySelector(".options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      optionsContainer.classList.add("active");
    }

    // searchBox.value = "";
    // filterList("");

    // if (optionsContainer.classList.contains("active")) {
    //   searchBox.focus();
    // }
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
});

//show modal
const popup = document.querySelector("#popup1");
const hide = document.querySelector("#popup1 .close");
const show = document.querySelector(".phone");
const overlay = document.querySelector('.overlay')
const notifyPopup = document.querySelector("#popup-notify");
const hideNotify = document.querySelector('#popup-notify .close')

window.addEventListener('load', () => {
  setTimeout(() => {
    notifyPopup.classList.add('show')
  },5000)
})
if (show) {
  show.addEventListener("click", () => {
    popup.classList.add("show");
    if (overlay.classList.contains("show")) {
      document.body.style.overflow = "hidden";
    }
  });
}

if (hide) {
  hide.addEventListener("click", () => {
    popup.classList.remove("show");
    document.body.style.overflow = "auto";
  });
}

if (hideNotify) {
  hideNotify.addEventListener("click", () => {
    notifyPopup.classList.remove("show");
    document.body.style.overflow = "auto";
  });
}