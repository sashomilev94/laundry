import { $win } from './utils';
import 'lazysizes';

export default function fullsizeImagesUI() {
	fullsizeImages();

	fullsizeVideos();

	initLazyLoad();
};

const fullsizeImages = () => {
	$('.js-fullsize-image').each((index, el) => {
		const $holder = $(el);
		const $img = $('img', $holder);
		const img = el.querySelector('img');
		let imgSrc = img.currentSrc;
		
		function checkImage(){
			imgSrc = img.currentSrc || img.src;
			el.style.backgroundImage = `url(${imgSrc})`;
		}
		
		if (imgSrc) {
			el.style.backgroundImage = `url(${imgSrc})`;
			setOrientationClass(img, $holder);
		} else {
			$img.on('load', function(){
				checkImage(img)
				setOrientationClass(img, $holder);
			});

			// Fix for IE if image is cached
			if (img.complete) checkImage(img);
		}
	});
}

function setOrientationClass(img, $holder) {
	if ( img.naturalHeight > img.naturalWidth ) {
		$holder.addClass('vertical');
	} else if (img.naturalHeight < img.naturalWidth) {
		$holder.addClass('horizontal');
	} else if (img.naturalHeight != 0 && img.naturalWidth != 0) {
		$holder.addClass('square');
	}
}

const fullsizeVideos = () => {
	$('.js-video').each(function() {
		const $videoHolder = $(this);
		const ratio = 16 / 9;
		let playerHeight, playerWidth;

		$win.on('load resize', function () {
			const width = $videoHolder.width('').width();
			const height = $videoHolder.height('').height();

			if (width / ratio < height) {
				playerWidth = Math.ceil(height * ratio);
				$videoHolder.width(playerWidth).height(height).css({
					left: (width - playerWidth) / 2,
					top: 0
				});
			} else {
				playerHeight = Math.ceil(width / ratio);
				$videoHolder.width(width).height(playerHeight).css({
					left: 0,
					top: (height - playerHeight) / 2
				});
			}
		});
	})
}

const initLazyLoad = () => {
	document.addEventListener('lazybeforeunveil', function(e){
		$(e.target).each((index, el) => {
			const bg = el.getAttribute('data-src');

			if(bg && $(el).parent().hasClass('fullsize-image')) {
				el.parentNode.style.backgroundImage = `url(${bg})`;
			}
		});
	});
}
