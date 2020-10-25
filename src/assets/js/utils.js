export const $win = $(window);
export const $doc = $(document);
export const $header = $('.header');
export const $wrapper = $('.wrapper');
export const $main = $('.main');
export const $hero = $('.hero');


export function getCurrentDevice(){
	let currentDevice = 'desktop';
	if ($win.width() <= 767) {
		currentDevice = 'mobile'
	} else if ($win.width() < 1200) {
		currentDevice = 'tablet'
	} else {
		currentDevice = 'desktop'
	}
	return currentDevice;
}
