import type { Handle, HandleServerError } from '@sveltejs/kit';
import { SESSION_COOKIE_NAME } from '$lib/consts';
import { getUser } from '$lib/auth/getUser.server';

export const handle: Handle = async function handle({ event, resolve }) {
	const url = event.request.url;
	const isLoginRoute = url
		.split('/')
		.some((part) => part.startsWith('login') || part.startsWith('initSession'));
	const user = await getUser(event.cookies.get(SESSION_COOKIE_NAME));

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
