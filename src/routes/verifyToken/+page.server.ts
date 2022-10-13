import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import admin from 'firebase-admin';

export const load: PageServerLoad = async function load(event) {
	const url = new URL(event.request.url)
	const token = url.searchParams.get('token')

	if (!token) {
		return {}
	}

	// Set session expiration to 5 days.
	const expiresIn = 60 * 60 * 24 * 5 * 1000;

	const sessionCookie = await admin.auth().createSessionCookie(token, { expiresIn });
	// const user = await getUser(sessionCookie);

	event.cookies.set('session', sessionCookie, {
		path: '/'
	});

	throw redirect(307, '/');
};
