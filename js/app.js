$(document).ready(function () {
  // First countdown
  var countDownDate1 = new Date("Jan 14, 2026 03:00:00").getTime();
  var x1 = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate1 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if (distance < 0) {
      clearInterval(x1);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);

  // Second countdown
  var countDownDate2 = new Date("Dec 8, 2025 10:00:00").getTime();
  var x2 = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-drip").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if (distance < 0) {
      clearInterval(x2);
      document.getElementById("countdown-drip").innerHTML = "EXPIRED";
    }
  }, 1000);

  // Arrow scroll
  (function () {
    const arrow = document.querySelector('.ca3-scroll-down-link');
    if (!arrow) return;

    arrow.classList.add('arrow-visible');
    const threshold = 50;
    let ticking = false;

    function update() {
      const y = window.scrollY || window.pageYOffset;
      if (y > threshold) {
        arrow.classList.add('arrow-hidden');
        arrow.classList.remove('arrow-visible');
      } else {
        arrow.classList.remove('arrow-hidden');
        arrow.classList.add('arrow-visible');
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