import { ID_TOKEN_QUERY_PARAM, REFRESH_TOKEN_QUERY_PARAM } from '$lib/consts';
import getAuth from '$lib/firebase/getAuth';
import { getFirebaseAdmin } from '$lib/firebase/getFirebaseAdmin.server';
import type { Handle } from '@sveltejs/kit';
import { signInWithCustomToken, type UserCredential } from 'firebase/auth';

/**
 * Check the validity of the `idToken` and eventually tries to refresh it.
 * Updates `idToken` and `refreshToken` in cookies.
 */
export const verifySession = async (
	event: Parameters<Handle>[0]['event']
): Promise<UserCredential['user'] | false> => {
	const idToken = event.cookies.get(ID_TOKEN_QUERY_PARAM);
	const refreshToken = event.cookies.get(REFRESH_TOKEN_QUERY_PARAM);

	if (!idToken && !refreshToken) return false;

	let uid: string;
	try {
		console.log('🛎 ', 'verify');
		const decodedIdToken = await getFirebaseAdmin()
			.auth()
			.verifyIdToken(idToken || '');
		uid = decodedIdToken.uid;
		console.log('🛎 ', 'verified');
	} catch (e) {
		console.error(e);
		console.log('🛎 ', 'fetching with refresh token');
		const response = await fetch(
			`https://securetoken.googleapis.com/v1/token?key=${getAuth().app.options.apiKey}`,
			{
				method: 'POST',
				body: JSON.stringify({
					grant_type: 'refresh_token',
					refresh_token: refreshToken
				})
			}
		);
		if (response.status === 200) {
			const { refresh_token, id_token, user_id } = await response.json();
			if (user_id) {
				uid = user_id;
				event.cookies.set(ID_TOKEN_QUERY_PARAM, id_token, {
					path: '/'
				});
				event.cookies.set(REFRESH_TOKEN_QUERY_PARAM, refresh_token, {
					path: '/'
				});
			} else {
				// @todo redirect to login
				throw new Error('Cannot refresh the token');
			}
		} else {
			throw new Error('Cannot refresh the token');
		}
	}
	const customToken = await getFirebaseAdmin().auth().createCustomToken(uid);
	const user = await signInWithCustomToken(getAuth(), customToken);
	return user.user;
};
