const menuBtn = document.querySelector('.menu-btn');
const content = document.querySelector('.menu-content');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    content.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    content.classList.remove('show');
    menuOpen = false;
  }
});

// collapse
const accordion = document.querySelectorAll('.button-collapse');
console.log(accordion)
accordion.forEach((accor) => {
  accor.addEventListener('click', () => {
    accor.classList.toggle('active')
    // var h = document.getElementsByClassName("accordion__wrap")[0];

    // if (accor.classList.contains('active')) {
    //   h.style.height = h.scrollHeight + 'px';
    // } else {
    //   h.style.height = 0;
    // }
  })
})


// click to sroll 
window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 60);
}