import { redirect } from '@sveltejs/kit';
import { SESSION_COOKIE_NAME } from '$lib/consts';
import type { PageServerLoad } from './$types';
import getAuth from '$lib/firebase/getAuth.server';

export const load: PageServerLoad = async function load(event) {
	console.log('🛎 ', 'logout');
	event.cookies.delete(SESSION_COOKIE_NAME, { path: '/' });
	await getAuth().signOut();

	throw redirect(307, '/');
};
