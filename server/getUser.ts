import admin from 'firebase-admin';
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

export const getUser = async (sessionCookie?: string | null): Promise<DecodedIdToken | false> => {
	if (!sessionCookie) return false;
	try {
		const result = await admin.auth().verifySessionCookie(sessionCookie);
		return result;
	} catch (e) {
		return false;
	}
};
