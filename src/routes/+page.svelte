<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log('🛎 ', 'component');
</script>

<h1>Welcome to SvelteKit</h1>
<p>This page was server side rendered.</p>

<p>Your UserAgent is:</p>
<pre>{data.userAgent}</pre>

<p>Your IP is:</p>
<pre>{data.ip}</pre>

<p>Your are logged as:</p>
<pre>{data.loggedAs}</pre>
