import { redirect } from '@sveltejs/kit';
import { SESSION_COOKIE_NAME } from '$lib/consts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function load(event) {
	event.cookies.delete(SESSION_COOKIE_NAME, { path: '/' });

	throw redirect(307, '/login');
};
