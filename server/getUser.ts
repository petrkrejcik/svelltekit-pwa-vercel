import { auth } from '$lib/firebase/firebaseOnServer';
import { getAdmin } from '$server/initializeFirebaseAdmin.server';
import { signInWithCustomToken, type UserCredential } from 'firebase/auth';

export const getUser = async (
	sessionCookie?: string | null
): Promise<UserCredential['user'] | false> => {
	if (!sessionCookie) return false;
	try {
		const result = await getAdmin().auth().verifySessionCookie(sessionCookie);
		const token = await getAdmin().auth().createCustomToken(result.uid);
		const user = await signInWithCustomToken(auth, token);
		return user.user;
	} catch (e) {
		console.error(e);
		return false;
	}
};
