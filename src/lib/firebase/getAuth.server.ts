import getFirebaseApp from '$lib/firebase/getFirebaseApp.server';
import { getAuth } from 'firebase/auth';

export default () => {
	return getAuth(getFirebaseApp());
};
