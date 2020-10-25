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

	fullsizeImagesUI();

	slidersUI();

	currentYear();
})(window, document, window.jQuery);
