export const prerender = false;
import initialiseFirebase from '$lib/firebase/initialiseFirebase';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	console.log('🛎 ', 'layout.ts');

	await initialiseFirebase();
};
