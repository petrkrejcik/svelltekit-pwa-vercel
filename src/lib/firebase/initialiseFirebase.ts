import { getApp, initializeApp } from 'firebase/app';
import { browser } from '$app/environment';

/**
 * @todo rename to `getFirebase`.
 * Or maybe keep it and return nothing.
 */
export default async () => {
	try {
		return getApp();
	} catch (e) {
		let config;
		if (browser) {
			config = (await import('$lib/firebase/configBrowser')).default;
		} else {
			config = (await import('$lib/firebase/configServer')).default;
		}
		return initializeApp(config);
	}
};
