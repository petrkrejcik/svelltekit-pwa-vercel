import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { isLogged } from '../../server/isLogged';

export const load: PageServerLoad = async function load(event) {
  console.log('🛎 ', 'server load');
	const userAgent = event.request.headers.get('user-agent');
	const ip = event.getClientAddress();

	const user = await isLogged(event.cookies.get('session'));
  console.log('🛎 ', 'canAccess', user);

	if (!user) {
    console.log('🛎 ', 'redirecting to login');
		throw redirect(302, '/login');
	}

	return {
		userAgent,
		ip,
    loggedAs: user.email
	};
}
