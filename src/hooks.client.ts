import { auth } from '$lib/firebase/firebase';

auth.onAuthStateChanged(async (user) => {
	if (user) {
		const token = await user.getIdToken();
		fetch('/api/login', {
			body: JSON.stringify({ token }),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
});
