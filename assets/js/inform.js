
// inform check step
function nextStep() {
    var getStep1 = document.getElementsByClassName('step-1')[0]
    var getStep2 = document.getElementsByClassName('step-2')[0]
    var getPrevBtn = document.getElementsByClassName('prev-button')[0]
    var pagi = document.getElementsByClassName('pagination-circle')[0]
    var pagi2 = document.getElementsByClassName('pagination-circle')[1]
    getStep1.classList.add('hide')
    pagi.classList.remove('active')
    pagi2.classList.add('active')
    getPrevBtn.classList.remove('disabled')
    getStep2.classList.remove('hide')
  }
  function prevStep() {
    var getStep1 = document.getElementsByClassName('step-1')[0]
    var getStep2 = document.getElementsByClassName('step-2')[0]
    var getPrevBtn = document.getElementsByClassName('prev-button')[0]
    var pagi = document.getElementsByClassName('pagination-circle')[0]
    var pagi2 = document.getElementsByClassName('pagination-circle')[1]
    pagi2.classList.remove('active')
    pagi.classList.add('active')
    getStep2.classList.add('hide')
    getPrevBtn.classList.add('disabled')
    getStep1.classList.remove('hide')
  }
  
  // active button 
  const active = document.querySelectorAll(".button-licese");
  console.log(active)
  active.forEach((activ) => {
    activ.addEventListener("click", () => {
      console.log("sàksajf")
      activ.classList.toggle("active");
    });
  });