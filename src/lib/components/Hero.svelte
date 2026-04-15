<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].hero);
	
	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<section id="work" class="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden">
	<!-- Ambient blobs with parallax -->
	<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none transition-transform duration-75 ease-out" style="transform: translateY({scrollY * -0.15}px)"></div>
	<div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-75 ease-out" style="transform: translateY({scrollY * -0.1}px)"></div>

	<div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
		
		<!-- Left: Text content (moves slightly slower than scroll) -->
		<div class="flex flex-col gap-6 transition-transform duration-75 ease-out relative z-20" style="transform: translateY({scrollY * -0.05}px)">
			<div class="inline-block border-l-4 border-secondary pl-4 mb-4">
				<p class="font-grotesk tracking-[0.3em] uppercase text-xs text-secondary">{t.badge}</p>
			</div>
			
			<h1 class="text-6xl md:text-8xl font-epilogue leading-[1.1] uppercase text-white">
				{t.title1} <br/>
				<span class="text-secondary text-neon-secondary">{t.titleColor1}</span> <br/>
				{t.title2} <br/>
				<span class="text-primary text-neon-primary">{t.titleColor2}</span> <br/>
				{t.title3}
			</h1>
			
			<p class="font-grotesk bg-surface-container-low/80 p-6 brutal-border text-gray-200 max-w-lg leading-relaxed mt-4">
				{t.desc}
			</p>
			
			<div class="flex gap-4 mt-6">
				<a href="#evolution" class="bg-primary text-surface px-8 py-3 font-bold hover:bg-white transition-colors brutal-border shadow-neon-primary text-sm uppercase tracking-widest text-center">
					{t.ctaPrimary}
				</a>
				<a href="#contact" class="bg-transparent text-white px-8 py-3 font-bold hover:bg-surface-container-highest transition-colors brutal-border text-sm uppercase tracking-widest text-center">
					{t.ctaSecondary}
				</a>
			</div>
		</div>

		<!-- Right: Image + Floating Card -->
		<div class="relative w-full h-[600px] lg:h-[700px] group transition-transform duration-75 ease-out z-10" style="transform: translateY({scrollY * 0.05}px)">
			<!-- Main image container -->
			<div class="absolute inset-0 brutal-border bg-surface-container-low overflow-hidden">
				<img 
					src="/user-portrait.webp" 
					alt="Jodi's Portrait"
					width="800"
					height="800"
					class="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100"
					style="transform: scale(1.05) translateY({scrollY * 0.08}px)"
					loading="eager"
				/>
				<!-- Overlay gradient for depth -->
				<div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
			</div>
			
			<!-- Floating card -->
			<div class="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-secondary p-6 brutal-border shadow-neon-secondary animate-[bounce_5s_ease-in-out_infinite]" style="transform: translateY({scrollY * -0.1}px)">
				<span class="material-symbols-outlined text-surface text-4xl">architecture</span>
			</div>
		</div>
	</div>
</section>
