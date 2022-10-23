import getFirestore from '$lib/firebase/getFirestore.server';
import { collection, getDocs } from 'firebase/firestore';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function load(event) {
	const userAgent = event.request.headers.get('user-agent');
	const ip = event.getClientAddress();

	const groups: Record<any, any> = [];
	if (event.locals.user) {
		const querySnapshot = await getDocs(collection(getFirestore(), 'groups'));
		querySnapshot.forEach((doc) => {
			groups.push(doc.data());
		});
	}

	return {
		userAgent,
		ip,
		loggedAs: event.locals.user && event.locals.user.displayName,
		groups
	};
};
