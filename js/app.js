$(document).ready(function(){
    // Set the date we're counting down to
var countDownDate = new Date("Jan 14, 2026 03:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

(function () {
  const arrow = document.querySelector('.ca3-scroll-down-link');
  if (!arrow) return;

  // Make sure it starts with the visible class (safe if you didn't add it)
  arrow.classList.add('arrow-visible');

  const threshold = 50; // px scrolled before hiding - adjust as needed
  let ticking = false;

  function update() {
    const y = window.scrollY || window.pageYOffset;
    if (y > threshold) {
      if (!arrow.classList.contains('arrow-hidden')) {
        arrow.classList.add('arrow-hidden');
        arrow.classList.remove('arrow-visible');
      }
    } else {
      if (arrow.classList.contains('arrow-hidden')) {
        arrow.classList.remove('arrow-hidden');
        arrow.classList.add('arrow-visible');
      }
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();

});