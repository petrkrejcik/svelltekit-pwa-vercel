<script>
	import { signInWithPopup } from 'firebase/auth';
	import { auth, googleAuthProvider } from '$lib/firebase/firebase';

	const login = () => {
		signInWithPopup(auth, googleAuthProvider).catch((error) => {
			console.error('Login error:', error.message);
		});
	};
</script>

<div class="h-screen w-full flex justify-center items-center flex-col">
	<h1 class="mb-8 text-3xl">Login</h1>
	<button class="btn btn-primary" on:click={login}>Sign In with Google</button>
</div>
