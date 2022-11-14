<script lang="ts">
	import type { PageData } from './$types';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { ID_TOKEN_QUERY_PARAM, REFRESH_TOKEN_QUERY_PARAM } from '$lib/consts';
	import getAuth from '$lib/firebase/getAuth';

	export let data: PageData;

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
			const refershToken = await userCredential.user.refreshToken;
			console.log('🛎 ', 'token', token);
			console.log('🛎 ', 'refresh', refershToken);
			goto(
				`/initSession?${ID_TOKEN_QUERY_PARAM}=${token}&${REFRESH_TOKEN_QUERY_PARAM}=${refershToken}`
			);
		} catch (e) {
			console.log('🛎 ', 'login error', e);
		}
	};

	const getQueryStatus = (query: PageData['privateData']) => {
		if (query.data) {
			return '✅';
		} else {
			console.log('🛎 ', 'err', query.error);
			return '❌';
		}
	};
</script>

<h1>Firebase Server Side Render Demo</h1>
<p>This page was server side rendered on Vercel.</p>

<p><strong>Your User Agent is:</strong></p>
<p><i>{data.userAgent}</i></p>

<p><strong>Server IP is:</strong></p>
<pre>{data.ip}</pre>

<p><strong>Your are logged as:</strong></p>
{#if data.loggedAs}
	<p>{data.loggedAs} (<a href="/logout" rel="external">Logout</a>)</p>
{:else}
	<button on:click={login}>Sign In with Google</button>
{/if}

<p><strong>Firestore query:</strong></p>
<div>
	Public data: {getQueryStatus(data.publicData)}
</div>
<div>
	Restricted data: {getQueryStatus(data.privateData)}
</div>
