import { auth } from '$lib/firebase/firebase';

console.log('🛎 ', 'init auth');

auth.onAuthStateChanged(async (user) => {
	console.log('🛎 ', 'changed', user);
	if (user) {
		const token = await user.getIdToken();
		fetch('/api/login', {
			body: JSON.stringify({ token }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
		});
	}
});
