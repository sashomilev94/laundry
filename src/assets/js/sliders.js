import Swiper from 'swiper/js/swiper';
import { getCurrentDevice } from './utils';

export const initSlider = (selector, options = {}) => {
	$(selector).each(function() {
		const $sliderWrap = $(this);
		const $slider = $sliderWrap.find('.swiper-container');
		const $paging = $sliderWrap.find('.js-paging');
		const $items = $sliderWrap.find('.swiper-slide');
		const $totalEl = $sliderWrap.find('.js-total');
		const $currentEl = $sliderWrap.find('.js-current');
		let lastActiveRealIndex = 0;

		let slidesCount = options.slidesPerView;

		if(getCurrentDevice() === 'tablet' && options.slidesPerViewTablet) {
			slidesCount = options.slidesPerViewTablet;
		}

		if(getCurrentDevice() === 'desktop' && options.slidesPerViewDesktop) {
			slidesCount = options.slidesPerViewDesktop;
		}

		/* If there is only one item we hide the pagination (CSS)
			 * and stop the loop or anything allowing to slide */
		if (options.slidesPerView !== 'auto') {
			const limit = slidesCount ? slidesCount : 1;

			if ($items.length <= limit) {
				disableSlider();
			}
		} else {
			if ( $items.length == 1 ) {
				disableSlider();
			}
		}

		$totalEl.text($items.length);
		$currentEl.text(1);

		const slider = new Swiper ($slider, {
			loop: true,
			loopedSlides: 5,
			speed: 500,
			simulateTouch: false,
			navigation: {
				prevEl: $paging.find('.js-paging-prev'),
				nextEl: $paging.find('.js-paging-next'),
			},
			pagination: {
				el: $slider.find('.js-slider-bullets'),
				type: 'bullets',
				clickable: true
			},
			...options,
		});

		slider.on('slideChange', () => {
			setTimeout(() => {
				$currentEl.text(slider.realIndex + 1);
			}, 100);
		});

		function disableSlider() {
			$sliderWrap.addClass('not-initialized');

			options.loop = false;
			options.centeredSlides = false;
			options.allowTouchMove = false;

			$totalEl.parent().addClass('hidden');
		}
	});
}

export default function slidersUI() {
	initSlider('.js-slider-demo');
}
