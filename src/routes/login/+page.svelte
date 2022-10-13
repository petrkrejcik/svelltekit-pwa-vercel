<script>
	import { signInWithPopup } from 'firebase/auth';
	import { auth, googleAuthProvider } from '$lib/firebase/firebase';
	import { goto } from '$app/navigation';

	const login = async () => {
		try {
			const userCredential = await signInWithPopup(auth, googleAuthProvider).catch((error) => {
				console.error('Login error:', error.message);
			});
			if (!userCredential) {
				throw new Error('Login failed');
			}
			const token = await userCredential.user.getIdToken();
			goto(`/verifyToken?token=${token}`);
		} catch (e) {
			console.log('🛎 ', 'login error', e);
		}
	};
</script>

<div class="h-screen w-full flex justify-center items-center flex-col">
	<h1 class="mb-8 text-3xl">Login</h1>
	<button class="btn btn-primary" on:click={login}>Sign In with Google</button>
</div>
