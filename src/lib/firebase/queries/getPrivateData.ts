import { collection, Firestore, getDocs } from 'firebase/firestore';

export default async (firestore: Firestore): Promise<number> => {
	const groups = [];
	const querySnapshot = await getDocs(collection(firestore, 'groups'));
	querySnapshot.forEach((doc) => {
		groups.push(doc.data());
	});
	return groups.length;
};
