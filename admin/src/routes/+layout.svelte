<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
	import '../app.css';
</script>

<svelte:head>
    <title>GoCommerce</title>
</svelte:head>



<main class="app">

	<svelte:boundary>
	
{@render children()}

	</svelte:boundary>
</main>
