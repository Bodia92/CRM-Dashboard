const menuTrigger = () => {
	const $cardBody = document.body;
	const $planItem = document.querySelector('.menuTrigger');

	function addClass(target) {
		if (target.closest('.main_section') && target.closest('.menuTrigger')) {
			$planItem.classList.add('menuTrigger--active_mod');
			$cardBody.classList.add('body--open_menu_state');
		}
	}
	document.addEventListener('click', (e) => {
		const targetElement = e.target;
		if ($cardBody.classList.contains('body--open_menu_state') && targetElement.closest('.menuTrigger')) {
			$cardBody.classList.remove('body--open_menu_state');
			$planItem.classList.remove('menuTrigger--active_mod');
		} else {
			addClass(targetElement);
		}
	});
};

export default menuTrigger;
