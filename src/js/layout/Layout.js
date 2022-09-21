// ------------------- imports
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad, onWindowResize } from 'utils';
// ------------------- imports###

// ------------------  import components
import { calcViewportHeight } from '../utils';
import aside from '../components/aside';
import mainSection from '../components/mainSection';
import customers from '../components/customers';
import menuTrigger from '../components/menuTrigger';
// ------------------  import components###

export default class Layout {
	constructor() {
		this.init = this.init.bind(this);
		this.init();
	}

	loadFunc() {
		console.log('layout load');
		calcViewportHeight();
		aside();
		mainSection();
		customers();
		menuTrigger();
	}

	init() {
		onWindowResize(() => {
			calcViewportHeight();
		});

		this.loadFunc();
	}
}
