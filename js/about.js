const icon = document.querySelector('.header__icon');
const menu = document.querySelector('.header__menu')
if (icon) {
	icon.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		icon.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}
/*------------------------------------*/
var delay__popup = 5000;
setTimeout("document.getElementById('overlay').style.display='block'", delay__popup);
/*-----------------------------------*/