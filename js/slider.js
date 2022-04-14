
document.addEventListener("DOMContentLoaded", function(event) { 
  var swiper = new Swiper('.swiper-container', {
    allowTouchMove: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 5000,
    },
  });
});