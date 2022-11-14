import getFirestore from '$lib/firebase/getFirestore';
import getPrivateData from '$lib/firebase/queries/getPrivateData';
import getPublicData from '$lib/firebase/queries/getPublicData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function load(event) {
	const userAgent = event.request.headers.get('user-agent');
	const ip = event.getClientAddress();

	let privateData: {
		data?: boolean;
		error?: string;
	};
	try {
		privateData = {
			data: await getPrivateData(getFirestore())
		};
	} catch (e) {
		privateData = { error: 'Unknown error' };
		if (e instanceof Error) {
			privateData = { error: e.message };
		}
	}

	let publicData: {
		data?: boolean;
		error?: string;
	};
	try {
		publicData = {
			data: await getPublicData(getFirestore())
		};
	} catch (e) {
		publicData = { error: 'Unknown error' };
		if (e instanceof Error) {
			publicData = { error: e.message };
		}
	}

	return {
		userAgent,
		ip,
		loggedAs: event.locals.user && event.locals.user.displayName,
		privateData,
		publicData
	};
};
