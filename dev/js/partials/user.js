'use strict';

window.onload = function() {
	// page-nav
	let menuTriggers = document.querySelectorAll('.header__menu, .page__darker, .main-nav__link, .side-nav__button'),
		pageBody = document.querySelector('body');
	for (let menuTrigger of menuTriggers) {
		menuTrigger.addEventListener('click', function () {
			pageBody.classList.toggle('open-nav');
		});
	}

	// scroll
	document.querySelectorAll('a.main-nav__link[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
	
	//inputmask
	let inputList = document.querySelectorAll('[data-input-mask]');
	for (let input of inputList) {
		let im = new Inputmask("+7 (999) 999-99-99");
		im.mask(input);
	}
	
	//modal
	let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth,
		pageHeader = document.querySelector('.page__header');

	const myModal = new HystModal({
		linkAttributeName: "data-hystmodal",
		beforeOpen: function(){
			pageHeader.style.paddingRight = scrollbarWidth + 'px';
		},
		afterClose: function(){
			pageHeader.style.paddingRight = '0';
		}
	});
	myModal.init();
};