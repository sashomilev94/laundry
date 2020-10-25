export default function currentYear() {
	printCurrentYear($('.js-year-container'));
}

/**
 * Get current year
 * @return {number}
 */
const getCurrentYear = () => new Date().getFullYear();

/* Print current year */
const printCurrentYear = $container => {
	const year = getCurrentYear();

	$container.text(year);
}
