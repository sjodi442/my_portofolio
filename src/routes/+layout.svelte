<script lang="ts">
	import '../app.css';
	import { i18n } from '$lib/i18n.svelte';

	let { children } = $props();
	
	$effect(() => {
		document.documentElement.lang = i18n.locale;
	});
	
	let scrollY = $state(0);
	
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY />

<div class="min-h-screen bg-seigaiha relative">
	{@render children()}
	
	{#if scrollY > 500}
		<button 
			onclick={scrollToTop}
			class="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 bg-surface border border-white/20 flex flex-col items-center justify-center text-white hover:text-primary hover:border-primary hover:-translate-y-2 transition-all duration-300 z-50 shadow-neon-primary brutal-border"
			aria-label="Back to top"
		>
			<span class="material-symbols-outlined">arrow_upward</span>
		</button>
	{/if}
</div>
