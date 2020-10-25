import fullsizeImagesUI from './fullsize';
import slidersUI from './sliders';

;(function(window, document, $) {
	$('a[href^="tel"]').each(function() {
		const linkHref = $(this).attr('href');

		$(this).attr('href', linkHref.replace(/ /igm, ''));
	});

	fullsizeImagesUI();

	slidersUI();
})(window, document, window.jQuery);
