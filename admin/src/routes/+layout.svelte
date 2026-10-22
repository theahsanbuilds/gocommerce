<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
	import '../app.css';
</script>

<svelte:head></svelte:head>

{@render children()}

<main class=""></main>
