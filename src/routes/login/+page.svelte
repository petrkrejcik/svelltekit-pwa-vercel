<script>
	// import { authStore } from '$lib/auth/firebaseAuth';
	import { signInWithPopup } from 'firebase/auth';
	import { auth, googleAuthProvider } from '$lib/firebase/firebase';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	$: user = false;
	$: if (browser && user) {
		const redirect = history.state?.referer || '/';
		goto(redirect === '/login' ? '/' : redirect);
	}

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
