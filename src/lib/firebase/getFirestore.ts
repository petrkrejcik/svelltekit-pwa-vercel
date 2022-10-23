import getFirebaseApp from '$lib/firebase/getFirebaseApp';
import { getFirestore } from 'firebase/firestore';

export default () => {
	return getFirestore(getFirebaseApp());
};
