import type { Handle, HandleServerError } from '@sveltejs/kit';
import { getUser } from '$server/getUser';
import { initializeFirebase } from '../server/initializeFirebase';

initializeFirebase();

export const handle: Handle = async function handle({ event, resolve }) {
	const url = event.request.url;
	const isLoginRoute = url
		.split('/')
		.some((part) => part.startsWith('login') || part.startsWith('verifyToken'));
	const user = await getUser(event.cookies.get('session'));

	if (user) {
		if (isLoginRoute) {
			return Response.redirect(`${event.url.origin}`, 302);
		}
	} else {
		if (!isLoginRoute) {
			return Response.redirect(`${event.url.origin}/login`, 302);
		}
	}

	event.locals.user = user;

	const response = await resolve(event);

	return response;
};

export const handleError: HandleServerError = function handleError({ error }) {
	console.log('🛎 ', 'error', error);
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
