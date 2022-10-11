import type { RequestHandler } from '@sveltejs/kit';
import admin from 'firebase-admin';

export const POST: RequestHandler = async function POST(event) {
	const { token } = await event.request.json();

	// Set session expiration to 5 days.
	const expiresIn = 60 * 60 * 24 * 5 * 1000;

	const sessionCookie = await admin.auth().createSessionCookie(token, { expiresIn });

	event.cookies.set('session', sessionCookie, {
		path: '/'
	});

	return new Response();
};
