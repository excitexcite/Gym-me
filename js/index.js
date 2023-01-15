let navScrollHidderSet = false;

const iconMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__nav-wrapper');

if (iconMenu) {
	iconMenu.addEventListener('click', function (event) {
		toggleBurgerInteractionClasses();
		if (navScrollHidderSet) {
			menu.style.setProperty('--nav-mobile', 'transparent');
			navScrollHidderSet = false;
		} else {
			menu.style.setProperty('--nav-mobile', '#131316');
			navScrollHidderSet = true;
		}
	});
}

function toggleBurgerInteractionClasses() {
	document.body.classList.toggle('scroll-lock');
	iconMenu.classList.toggle('menu__icon--active');
	menu.classList.toggle('header__nav-wrapper--active');
}

$(document).ready(function () {
	var scrollLink = $('.scroll');

	// Smooth scrolling
	scrollLink.click(function (e) {
		e.preventDefault();
		$('body,html').animate(
			{
				scrollTop: $(this.hash).offset().top,
			},
			1000
		);

		if (iconMenu.classList.contains('menu__icon--active')) {
			toggleBurgerInteractionClasses();
			navScrollHidderSet = false;
			// menu.style.setProperty('--nav-mobile', 'transparent');
		}
	});

	// Active link switching
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function () {
			var sectionOffset = $(this.hash).offset().top;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('nav__list-item--active');
				$(this).parent().siblings().removeClass('nav__list-item--active');
			}
		});
	});
});

const accordion = document.querySelectorAll('.faq__item-header');
for (let question of accordion) {
	question.addEventListener('click', function () {
		const answer = this.nextElementSibling;
		const icon = this.children[1];
		icon.classList.toggle('faq__item-icon--active');
		if (answer.style.maxHeight) {
			answer.style.maxHeight = null;
		} else {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		}
	});
}

const headerNavBackground = document.querySelector('.header-nav-background');
const headerSection = document.querySelector('.header__content');

const headerSectionOptions = {
	rootMargin: '-500px 0px 0px 0px',
};

const headerSectionObserver = new IntersectionObserver(function (
	entries,
	headerSectionObserver
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			headerNavBackground.classList.add('sticky');
		} else {
			headerNavBackground.classList.remove('sticky');
		}
	});
},
headerSectionOptions);

headerSectionObserver.observe(headerSection);

$(document).ready(function () {
	$('.program__slider').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		initialSlide: 2,
		variableWidth: true,
		appendArrows: $('.program__slider-arrows'),
	});
});

$(document).ready(function () {
	$('.community__slider').slick({
		slidesToShow: 1,
		variableWidth: true,
		infinite: false,
		initialSlide: 0,
		appendArrows: $('.community-slider__arrows'),
		responsive: [
			{
				breakpoint: 834,
				settings: {
					centerMode: true,
					variableWidth: true,
					slidesToShow: 1,
					initialSlide: 1,
					infinite: true,
				},
			},
		],
	});
});
