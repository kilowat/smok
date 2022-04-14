
// ready
document.addEventListener("DOMContentLoaded", function(event) { 

  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  let header = document.querySelector('.mobile-block');

  const checkScroll = function() {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  let toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 60) { 

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  function throttle(f, t) {
    return function (args) {
      let previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall === undefined // function is being called for the first time
          || (this.lastCall - previousCall) > t) { // throttle time has elapsed
        f(args);
      }
    }
  }

  window.addEventListener('scroll', throttle(checkScroll, 10));

});
