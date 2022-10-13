import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function load(event) {
	event.cookies.delete('session', {path: '/'});

	throw redirect(307, '/login');
};
