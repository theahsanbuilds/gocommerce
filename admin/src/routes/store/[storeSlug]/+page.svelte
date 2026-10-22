<script lang="ts">
	import Title from '#lib/components/Title.svelte';
</script>

<Title page="Home" />

<!-- `.page` stays: the shell renders each route straight into its flex row,
     so this element is the one that gets sized beside the sidebar, and the
     Playwright pass uses it as the proof a screen actually rendered. -->
<div class="page shopify-skin">
	<div
		class="tw:flex tw:min-h-full tw:w-full tw:min-w-0 tw:flex-col tw:bg-background tw:font-sans tw:text-foreground"
	>
		<div class="tw:flex tw:w-full tw:min-w-0 tw:flex-col tw:gap-3 tw:p-4 tw:sm:px-6 tw:sm:py-5">
			<header class="tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-4">
				<div>
					<h1 class="tw:text-2xl tw:font-semibold tw:tracking-tight tw:sm:text-3xl">Home</h1>
					{#if who}
						<p class="tw:mt-0.5 tw:text-sm tw:text-muted-foreground">Welcome back, {who}</p>
					{/if}
				</div>
			</header>
		</div>
	</div>
</div>
