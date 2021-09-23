// inform check step
const prevStep = document.getElementById("prev-step");
const nextStep = document.getElementById("next-step");
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
});
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
// active button
var list = document.querySelectorAll(".button-choose");
var btnRegister = document.getElementById('btn-register')
const limit = 3;

list.forEach((item) => {
  item.addEventListener('click', (e)=> {
    const currentActiveValue = item.classList.contains('active')
    if (currentActiveValue) {
      item.classList.toggle('active')
    } else {
      if (
        [...list].filter((e) => e.classList.contains('active')).length < limit
      ) {
        item.classList.toggle('active')
      } else {
        // alert("Chọn tối đa 3 nội dung..")
        return ;
      }
    }
    checkRegisterButton();
  })
})

function checkRegisterButton() {
  btnRegister.disabled = ![...list].some((e) => e.classList.contains('active'))
}

// custom select
const selectedAll = document.querySelectorAll(".select-styled");
console.log(selectedAll)
selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  // const searchBox = selected.nextElementSibling;
  console.log(optionsContainer)

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

  // searchBox.addEventListener("keyup", function (e) {
  //   filterList(e.target.value);
  // });

  // const filterList = (searchTerm) => {
  //   searchTerm = searchTerm.toLowerCase();
  //   optionsList.forEach((option) => {
  //     let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
  //     if (label.indexOf(searchTerm) != -1) {
  //       option.style.display = "block";
  //     } else {
  //       option.style.display = "none";
  //     }
  //   });
  // };
});