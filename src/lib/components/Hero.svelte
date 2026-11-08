<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].hero);
	
	let scrollY = $state(0);
	let activeMode = $state<'avatar' | 'photo'>('avatar');

	function toggleMode() {
		activeMode = activeMode === 'avatar' ? 'photo' : 'avatar';
	}
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
		<div class="relative w-full h-[650px] lg:h-[720px] group transition-transform duration-75 ease-out z-10" style="transform: translateY({scrollY * 0.05}px)">
			<!-- Main image container (clickable to toggle between Avatar and Real Photo) -->
			<button 
				type="button"
				onclick={toggleMode}
				class="w-full h-full text-left p-0 border-0 bg-transparent cursor-pointer block relative brutal-border bg-surface-container-low overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/50"
				title="Click to toggle between Digital Avatar and Real Photo"
				aria-label="Toggle between Digital Avatar and Real Photo"
			>
				<!-- 2D Avatar Image (Default) -->
				<img 
					src="/user-avatar.webp" 
					alt="Jodi's Anime Avatar"
					width="800"
					height="800"
					class="w-full h-full object-cover object-bottom transition-all duration-700 {activeMode === 'avatar' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none absolute inset-0'}"
					style="transform: translateY({scrollY * 0.08}px)"
					loading="eager"
				/>

				<!-- Real Photo Image -->
				<img 
					src="/user-portrait.webp" 
					alt="Jodi's Portrait"
					width="800"
					height="800"
					class="w-full h-full object-cover object-bottom transition-all duration-700 {activeMode === 'photo' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none absolute inset-0'}"
					style="transform: translateY({scrollY * 0.08}px)"
					loading="eager"
				/>

				<!-- Technical metadata HUD tag -->
				<div class="absolute top-4 left-4 z-10 bg-surface/85 backdrop-blur border border-white/10 px-3 py-1 brutal-border flex items-center gap-2 pointer-events-none select-none">
					<span class="w-1.5 h-1.5 rounded-full {activeMode === 'avatar' ? 'bg-secondary shadow-neon-secondary' : 'bg-primary shadow-neon-primary'} animate-pulse"></span>
					<span class="font-grotesk text-[10px] tracking-[0.25em] text-gray-200 uppercase">
						{activeMode === 'avatar' ? 'DIGITAL ARCHETYPE // AVATAR' : 'TOKYO // REAL PHOTO'}
					</span>
				</div>

				<!-- Mode Switcher Pill Controls -->
				<div class="absolute bottom-4 right-4 z-20 flex items-center gap-1 bg-surface/90 backdrop-blur border border-white/15 p-1 brutal-border select-none pointer-events-auto">
					<span 
						onclick={(e) => { e.stopPropagation(); activeMode = 'avatar'; }}
						onkeydown={(e) => { if (e.key === 'Enter') { e.stopPropagation(); activeMode = 'avatar'; } }}
						role="button"
						tabindex="0"
						class="px-2.5 py-1 text-[10px] font-grotesk tracking-widest uppercase transition-all cursor-pointer {activeMode === 'avatar' ? 'bg-secondary text-surface font-bold shadow-neon-secondary' : 'text-gray-400 hover:text-white'}"
					>
						Avatar
					</span>
					<span 
						onclick={(e) => { e.stopPropagation(); activeMode = 'photo'; }}
						onkeydown={(e) => { if (e.key === 'Enter') { e.stopPropagation(); activeMode = 'photo'; } }}
						role="button"
						tabindex="0"
						class="px-2.5 py-1 text-[10px] font-grotesk tracking-widest uppercase transition-all cursor-pointer {activeMode === 'photo' ? 'bg-primary text-surface font-bold shadow-neon-primary' : 'text-gray-400 hover:text-white'}"
					>
						Photo
					</span>
				</div>

				<!-- Click Hint Badge (visible on hover) -->
				<div class="absolute bottom-4 left-4 z-10 opacity-70 group-hover:opacity-100 transition-opacity bg-surface/80 backdrop-blur px-2.5 py-1 text-[9px] font-grotesk tracking-widest text-gray-300 uppercase brutal-border border border-white/10 hidden sm:flex items-center gap-1.5">
					<span class="material-symbols-outlined text-[12px] text-primary">touch_app</span>
					<span>CLICK TO SWITCH</span>
				</div>

				<!-- Top subtle gradient -->
				<div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-surface/40 to-transparent pointer-events-none"></div>
				<!-- Overlay gradient for depth (subtle at bottom edge) -->
				<div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/70 to-transparent pointer-events-none"></div>
			</button>
			
			<!-- Floating card -->
			<div class="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-secondary p-6 brutal-border shadow-neon-secondary animate-[bounce_5s_ease-in-out_infinite]" style="transform: translateY({scrollY * -0.1}px)">
				<span class="material-symbols-outlined text-surface text-4xl">architecture</span>
			</div>
		</div>
	</div>
</section>
