import type { Handle, HandleServerError } from '@sveltejs/kit';
// import { getUser } from '$lib/auth/getUser.server';
import { verifySession } from '$lib/auth/signIn.server';
import initialiseFirebase from '$lib/firebase/initialiseFirebase';

const UNPROTECTED_URIS = ['/login'];

export const handle: Handle = async function handle({ event, resolve }) {
	await initialiseFirebase();

	const user = await verifySession(event); // Call only if URL is not in UNPROTECTED_URIS

	event.locals.user = user;

	const response = await resolve(event);

	return response;
};

export const handleError: HandleServerError = function handleError({ error }) {
	console.error(error);

	let code = 'UNKNOWN';
	if (error instanceof Error) {
		code = error.message;
	} else if (error && typeof error === 'object' && Object.hasOwn(error, 'code')) {
		code = (error as { code: string }).code;
	}
	return {
		message: 'Whoops!',
		code
	};
};
