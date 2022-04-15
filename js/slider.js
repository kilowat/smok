
document.addEventListener("DOMContentLoaded", function(event) { 
  var swiper = new Swiper('.swiper-container', {
    allowTouchMove: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });
});