document.addEventListener("DOMContentLoaded", function(event) { 
  const $rootUls = document.querySelectorAll("#drop-down-menu>ul>li>ul");
  for(let ul of $rootUls) {
    const clone = ul.cloneNode(true);
    clone.style.height = 0;
    clone.style.opacity = 0;
    clone.style.display = 'inline-block';
    document.querySelector('body').after(clone);
    const w = clone.offsetWidth;
    clone.remove();
    ul.style.width = w + 'px';
  }
  document.querySelector("#drop-down-menu").classList.remove('menu-load');
});