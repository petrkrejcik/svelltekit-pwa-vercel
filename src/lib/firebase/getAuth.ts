import getFirebaseApp from '$lib/firebase/getFirebaseApp';
import { getAuth } from 'firebase/auth';

export default () => {
	return getAuth(getFirebaseApp());
};
