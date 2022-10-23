import getFirebaseAppServer from '$lib/firebase/getFirebaseApp.server';
import { getFirestore } from 'firebase/firestore';

export default () => {
	return getFirestore(getFirebaseAppServer());
};
