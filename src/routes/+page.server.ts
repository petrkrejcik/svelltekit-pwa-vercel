import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function load(event) {
	const userAgent = event.request.headers.get('user-agent');
	const ip = event.getClientAddress();

	return {
		userAgent,
		ip,
		loggedAs: event.locals.user
	};
};
