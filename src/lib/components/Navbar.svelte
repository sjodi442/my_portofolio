<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	import { slide } from 'svelte/transition';
	let t = $derived(dict[i18n.locale as keyof typeof dict].nav);

	let mobileMenuOpen = $state(false);

	let scrollProgress = $state(0);
	
	$effect(() => {
		const handleScroll = () => {
			const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			scrollProgress = height > 0 ? (winScroll / height) * 100 : 0;
		};
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);
		handleScroll();
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	});
</script>

<nav class="fixed top-0 w-full z-50 glass" aria-label="Main Navigation">
	<div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
		<!-- Logo -->
		<div class="flex items-center gap-4">
			<div class="w-10 h-10 brutal-border overflow-hidden border border-white/20">
				<img src="/user-portrait-thumb.webp" alt="Avatar" width="40" height="40" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
			</div>
			<div class="font-epilogue font-bold text-lg md:text-xl tracking-widest text-white uppercase hidden sm:block">
				MIDNIGHT ARCHITECT
			</div>
		</div>

		<!-- Desktop Menu -->
		<div class="hidden md:flex items-center gap-8 text-sm font-grotesk tracking-[0.2em] uppercase">
			<a href="#work" class="hover:text-primary transition-colors text-white" aria-label="Navigate to Work section">{t.work}</a>
			<a href="#evolution" class="hover:text-primary transition-colors text-white" aria-label="Navigate to Evolution section">{t.evolution}</a>
			<a href="#toolkit" class="hover:text-primary transition-colors text-white" aria-label="Navigate to Toolkit section">{t.toolkit}</a>
		</div>

		<!-- CTA & Lang -->
		<div class="hidden md:flex items-center gap-6">
			<div class="flex items-center gap-3 text-xs font-epilogue tracking-widest text-gray-500 font-bold">
				<button class:text-white={i18n.locale === 'en'} class="hover:text-primary transition-colors uppercase" onclick={() => i18n.locale = 'en'}>EN</button>
				<span class="opacity-50">/</span>
				<button class:text-white={i18n.locale === 'id'} class="hover:text-primary transition-colors uppercase" onclick={() => i18n.locale = 'id'}>ID</button>
				<span class="opacity-50">/</span>
				<button class:text-white={i18n.locale === 'ja'} class="hover:text-primary transition-colors uppercase" onclick={() => i18n.locale = 'ja'}>日本語</button>
			</div>
			<a href="#contact" class="inline-block bg-primary text-surface px-6 py-2 font-bold hover:bg-white transition-colors brutal-border shadow-neon-primary text-sm uppercase tracking-widest" aria-label="Navigate to Contact section">
				{t.getInTouch}
			</a>
		</div>

		<button class="md:hidden text-white hover:text-primary transition-colors" aria-label="Toggle Navigation Menu" onclick={() => mobileMenuOpen = !mobileMenuOpen} aria-expanded={mobileMenuOpen}>
			<span class="material-symbols-outlined text-3xl" aria-hidden="true">{mobileMenuOpen ? 'close' : 'menu'}</span>
		</button>
	</div>

	<!-- Scroll Progress Bar -->
	<div class="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-100 shadow-[0_0_10px_rgba(199,153,255,0.8)] z-50" style="width: {scrollProgress}%;"></div>

	<!-- Mobile Menu Dropdown -->
	{#if mobileMenuOpen}
		<div class="md:hidden w-full glass flex flex-col p-6 gap-6 border-t-0 shadow-xl" transition:slide>
			<div class="flex flex-col gap-4 text-sm font-grotesk tracking-[0.2em] text-center">
				<a href="#work" class="hover:text-primary transition-colors text-white uppercase" onclick={() => mobileMenuOpen = false}>{t.work}</a>
				<a href="#evolution" class="hover:text-primary transition-colors text-white uppercase" onclick={() => mobileMenuOpen = false}>{t.evolution}</a>
				<a href="#toolkit" class="hover:text-primary transition-colors text-white uppercase" onclick={() => mobileMenuOpen = false}>{t.toolkit}</a>
			</div>
			
			<div class="flex justify-center items-center gap-4 text-xs font-epilogue tracking-widest text-gray-500 font-bold border-t border-white/10 pt-6">
				<button class:text-white={i18n.locale === 'en'} class="hover:text-primary transition-colors uppercase" onclick={() => { i18n.locale = 'en'; mobileMenuOpen = false; }}>EN</button>
				<span class="opacity-50">/</span>
				<button class:text-white={i18n.locale === 'id'} class="hover:text-primary transition-colors uppercase" onclick={() => { i18n.locale = 'id'; mobileMenuOpen = false; }}>ID</button>
				<span class="opacity-50">/</span>
				<button class:text-white={i18n.locale === 'ja'} class="hover:text-primary transition-colors uppercase" onclick={() => { i18n.locale = 'ja'; mobileMenuOpen = false; }}>日本語</button>
			</div>

			<a href="#contact" class="text-center w-full bg-primary text-surface px-6 py-3 mt-2 font-bold hover:bg-white transition-colors brutal-border shadow-neon-primary text-sm uppercase tracking-widest" onclick={() => mobileMenuOpen = false}>
				{t.getInTouch}
			</a>
		</div>
	{/if}
</nav>
