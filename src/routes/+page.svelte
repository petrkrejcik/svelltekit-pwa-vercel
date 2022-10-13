<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const logout = async () => {
		goto('logout');
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>This page was server side rendered.</p>

<p>Your UserAgent is:</p>
<pre>{data.userAgent}</pre>

<p>Your IP is:</p>
<pre>{data.ip}</pre>

{#if data.loggedAs}
	<p>Your are logged as:</p>
	<pre>{data.loggedAs.email}</pre>
	<button on:click={logout}>Logout</button>
{/if}
