import getFirestore from '$lib/firebase/getFirestore.server';
import getPrivateData from '$lib/firebase/queries/getPrivateData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function load(event) {
	const userAgent = event.request.headers.get('user-agent');
	const ip = event.getClientAddress();

	let privateData: {
		data?: number;
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

	return {
		userAgent,
		ip,
		loggedAs: event.locals.user && event.locals.user.displayName,
		privateData
	};
};
