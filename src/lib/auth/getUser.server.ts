import getAuth from '$lib/firebase/getAuth';
import { signInWithCustomToken, type UserCredential } from 'firebase/auth';

export const getUser = async (token?: string | null): Promise<UserCredential['user'] | false> => {
	if (!token) return false;
	try {
		const user = await signInWithCustomToken(getAuth(), token);
		return user.user;
	} catch (e) {
		console.error(e);
		return false;
	}
};
