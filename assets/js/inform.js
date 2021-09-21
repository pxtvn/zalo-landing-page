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
const active = document.querySelectorAll(".button-choose");
active.forEach((activ) => {
  activ.addEventListener("click", () => {
    activ.classList.toggle("active");
  });
});

// custom select
const select = document.querySelectorAll(".selection");
const options = document.querySelectorAll(".option");
const selectlabel = document.querySelector("#select-label");
const selectlabel2 = document.querySelector("#select-label2");

select.forEach((activ) => {
  activ.addEventListener("click", function (e) {
    activ.classList.toggle("active");
  });
});

options.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectTitle(e);
  });
});

function setSelectTitle(e) {
  const label = document.querySelector(`li[value="${e.target.id}"]`).innerHTML;
  selectlabel.innerHTML = label;
  selectlabel2.innerHTML = label;
  select.classList.remove("active");
}
