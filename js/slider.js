
function init() {
  var swiper = new Swiper('.swiper-container', {
    allowTouchMove: false,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });
}

document.addEventListener("DOMContentLoaded", function(event) { 
  init();
});