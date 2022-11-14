import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { ID_TOKEN_QUERY_PARAM, REFRESH_TOKEN_QUERY_PARAM } from '$lib/consts';

export const load: PageServerLoad = async function load(event) {
	const url = new URL(event.request.url);
	const idToken = url.searchParams.get(ID_TOKEN_QUERY_PARAM);
	const refreshToken = url.searchParams.get(REFRESH_TOKEN_QUERY_PARAM);

	if (!idToken || !refreshToken) {
		return {};
	}

	// console.log('🛎 ', 'get admin');
	// const { uid } = await getFirebaseAdmin().auth().verifyIdToken(idToken);
	// const customToken = await getFirebaseAdmin().auth().createCustomToken(uid);

	event.cookies.set(ID_TOKEN_QUERY_PARAM, idToken, {
		path: '/'
	});
	event.cookies.set(REFRESH_TOKEN_QUERY_PARAM, refreshToken, {
		path: '/'
	});

	throw redirect(307, '/');
};
