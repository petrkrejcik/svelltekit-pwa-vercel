import { doc, Firestore, getDoc } from 'firebase/firestore';

export default async (firestore: Firestore): Promise<boolean | undefined> => {
	const querySnapshot = await getDoc(doc(firestore, 'public/test-document'));
	const data = querySnapshot.data();
	return data as boolean | undefined;
};
