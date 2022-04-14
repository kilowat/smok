/*** Document Ready */

document.addEventListener('DOMContentLoaded',() =>
{
	mobileMenu_init();
});

/*** Mobile Menu */
function mobileMenu_init()
{
  document.querySelector('#mobile-menu').addEventListener('click', function(event)
  {
    event.preventDefault();
    mobileMenu_toggle();
  });
}

function mobileMenu_build()
{
	let menu_content = document.createElement('div');
	menu_content.setAttribute('id', 'mobile-menu-content');
	document.body.append(menu_content);
	
	let menu_content_overflow = document.createElement('div');
	menu_content.appendChild(menu_content_overflow);
	
	let navigation_clone = document.querySelector('header nav > ul').cloneNode(true);
	menu_content_overflow.appendChild(navigation_clone);
}

function mobileMenu_toggle()
{
  document.querySelector('body').classList.toggle('scroll-disabled');
	document.getElementById('mobile-menu').classList.toggle('open');
  document.querySelector('.mobile-block').classList.toggle('open');
	document.getElementById('mobile-menu-content').classList.toggle('open');
}
