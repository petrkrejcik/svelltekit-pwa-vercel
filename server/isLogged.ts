import { auth } from 'firebase-admin';
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

export const isLogged = async (sessionCookie?: string | null): Promise<DecodedIdToken | false> => {
	if (!sessionCookie) return false;
	try {
		const result = await auth().verifySessionCookie(sessionCookie);
		console.log('🛎 ', 'login verified', sessionCookie);
		return result;
	} catch (e) {
		console.log('🛎 ', 'log in error', e);
		return false;
	}
};
