import fullsizeImagesUI from './fullsize';
import slidersUI from './sliders';
import currentYear from './current-year'

;(function(window, document, $) {
	$('a[href^="tel"]').each(function() {
		const linkHref = $(this).attr('href');

		$(this).attr('href', linkHref.replace(/ /igm, ''));
	});

	$('.js-nav-btn').on('click', function(event) {
		event.preventDefault();
		
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});

	$('.js-go-top').on('click', function(event){
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 800);
	});

	$('.js-scroll-to-section').on('click', function(event) {
		event.preventDefault();

		const $target = $($(this).attr('href'));


		$('html, body').animate({
			scrollTop: $target.offset().top
		});
	});

	$(window).on('scroll', function() {
		$(this).scrollTop() > 400 ? $('.back-top').addClass('visible') : $('.back-top').removeClass('visible')
	});

	fullsizeImagesUI();

	slidersUI();

	currentYear();
})(window, document, window.jQuery);
