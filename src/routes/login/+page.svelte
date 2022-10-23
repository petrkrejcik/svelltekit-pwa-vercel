<script>
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { SESSION_COOKIE_NAME } from '$lib/consts';
	import getAuth from '$lib/firebase/getAuth';

	const login = async () => {
		try {
			const userCredential = await signInWithPopup(getAuth(), new GoogleAuthProvider()).catch(
				(error) => {
					console.error('Login error:', error.message);
				}
			);
			if (!userCredential) {
				throw new Error('Login failed');
			}
			const token = await userCredential.user.getIdToken();
			goto(`/initSession?${SESSION_COOKIE_NAME}=${token}`);
		} catch (e) {
			console.log('🛎 ', 'login error', e);
		}
	};
</script>

<div class="h-screen w-full flex justify-center items-center flex-col">
	<h1 class="mb-8 text-3xl">Login</h1>
	<button class="btn btn-primary" on:click={login}>Sign In with Google</button>
</div>
