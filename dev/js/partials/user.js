'use strict';

window.onload = function() {
	// page-nav
	let menuTriggers = document.querySelectorAll('.header__menu, .page__darker'),
		pageBody = document.querySelector('body');
	for (let menuTrigger of menuTriggers) {
		menuTrigger.addEventListener('click', function () {
			pageBody.classList.toggle('open-nav');
		});
	}
	
	//inputmask
	//
	// let inputList = document.querySelectorAll('[data-input-mask]');
	// for (let input of inputList) {
	// 	let im = new Inputmask("99-9999999");
	// 	im.mask(input);
	// }
	
}