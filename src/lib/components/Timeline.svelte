<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].timeline);

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<section id="evolution" class="pt-24 pb-48 px-6 relative border-t border-surface-container-highest overflow-hidden">
	<!-- Parallax background shapes -->
	<div class="absolute inset-0 bg-surface-container opacity-50 z-0"></div>
	<div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] z-0 transition-transform duration-75 ease-out" style="transform: translateY({scrollY * -0.05}px)"></div>
	<div class="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-tertiary/5 blur-[150px] z-0 transition-transform duration-75 ease-out" style="transform: translateY({scrollY * -0.08}px)"></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="mb-16">
			<p class="font-grotesk tracking-[0.3em] uppercase text-xs text-primary mb-2">Evolution</p>
			<h2 class="text-4xl md:text-6xl font-epilogue uppercase text-white transition-transform duration-75 ease-out" style="transform: translateY({scrollY * -0.02}px)">{t.titlePre} <span class="text-secondary text-neon-secondary">{t.titlePost}</span></h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Timeline Item 1: PT Solonet -->
			<div class="group relative pt-4 hover:-translate-y-2 transition-transform duration-300 ease-out" style="transform: translateY({scrollY * 0.02}px)">
				<div class="absolute top-0 left-0 w-full h-1 bg-surface-container-high">
					<div class="h-full w-0 bg-white group-hover:w-full transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
				</div>
				<div class="bg-surface-container-low p-8 brutal-border h-full relative overflow-hidden">
					<div class="absolute top-4 right-4 text-surface-container-highest font-epilogue text-6xl opacity-30 font-bold transition-transform duration-75" style="transform: translateY({scrollY * 0.03}px)">01</div>
					<div class="mb-6 w-12 h-12 flex items-center justify-center bg-surface border border-white text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]">
						<span class="material-symbols-outlined">code</span>
					</div>
					<p class="font-grotesk text-xs tracking-widest text-gray-400 mb-2 uppercase">{t.items[0].company} • {t.items[0].period}</p>
					<h3 class="text-2xl font-epilogue text-white mb-4 uppercase">{t.items[0].role}</h3>
					<p class="text-gray-400 font-grotesk leading-relaxed relative z-10">
						{t.items[0].desc}
					</p>
				</div>
			</div>

			<!-- Timeline Item 2: Kabushikigaisha Kashiwazaki -->
			<div class="group relative pt-4 hover:-translate-y-2 transition-transform duration-300 ease-out" style="transform: translateY({scrollY * 0.02}px)">
				<div class="absolute top-0 left-0 w-full h-1 bg-surface-container-high">
					<div class="h-full w-0 bg-secondary group-hover:w-full transition-all duration-500 shadow-neon-secondary"></div>
				</div>
				<div class="bg-surface-container-low p-8 brutal-border h-full relative overflow-hidden">
					<div class="absolute top-4 right-4 text-surface-container-highest font-epilogue text-6xl opacity-30 font-bold transition-transform duration-75" style="transform: translateY({scrollY * 0.04}px)">02</div>
					<div class="mb-6 w-12 h-12 flex items-center justify-center bg-surface border border-secondary text-secondary shadow-neon-secondary">
						<span class="material-symbols-outlined">construction</span>
					</div>
					<p class="font-grotesk text-xs tracking-widest text-gray-400 mb-2 uppercase">{t.items[1].company} • {t.items[1].period}</p>
					<h3 class="text-2xl font-epilogue text-white mb-4 uppercase">{t.items[1].role}</h3>
					<p class="text-gray-400 font-grotesk leading-relaxed relative z-10">
						{t.items[1].desc}
					</p>
				</div>
			</div>

			<!-- Timeline Item 3: Kabushikigaisha Teiku -->
			<div class="group relative pt-4 hover:-translate-y-2 transition-transform duration-300 ease-out" style="transform: translateY({scrollY * 0.02}px)">
				<div class="absolute top-0 left-0 w-full h-1 bg-surface-container-high">
					<div class="h-full w-0 bg-tertiary group-hover:w-full transition-all duration-500 shadow-neon-tertiary"></div>
				</div>
				<div class="bg-surface-container-low p-8 brutal-border h-full relative overflow-hidden">
					<div class="absolute top-4 right-4 text-surface-container-highest font-epilogue text-6xl opacity-30 font-bold transition-transform duration-75" style="transform: translateY({scrollY * 0.05}px)">03</div>
					<div class="mb-6 w-12 h-12 flex items-center justify-center bg-surface border border-tertiary text-tertiary shadow-neon-tertiary">
						<span class="material-symbols-outlined">factory</span>
					</div>
					<p class="font-grotesk text-xs tracking-widest text-gray-400 mb-2 uppercase">{t.items[2].company} • {t.items[2].period}</p>
					<h3 class="text-2xl font-epilogue text-white mb-4 uppercase">{t.items[2].role}</h3>
					<p class="text-gray-400 font-grotesk leading-relaxed relative z-10">
						{t.items[2].desc}
					</p>
				</div>
			</div>

			<!-- Timeline Item 4: Language Instructor -->
			<div class="group relative pt-4 hover:-translate-y-2 transition-transform duration-300 ease-out" style="transform: translateY({scrollY * 0.02}px)">
				<div class="absolute top-0 left-0 w-full h-1 bg-surface-container-high">
					<div class="h-full w-0 bg-primary group-hover:w-full transition-all duration-500 shadow-neon-primary"></div>
				</div>
				<div class="bg-surface-container-low p-8 brutal-border h-full relative overflow-hidden">
					<div class="absolute top-4 right-4 text-surface-container-highest font-epilogue text-6xl opacity-30 font-bold transition-transform duration-75" style="transform: translateY({scrollY * 0.06}px)">04</div>
					<div class="mb-6 w-12 h-12 flex items-center justify-center bg-surface border border-primary text-primary shadow-neon-primary">
						<span class="material-symbols-outlined">school</span>
					</div>
					<p class="font-grotesk text-xs tracking-widest text-gray-400 mb-2 uppercase">{t.items[3].company} • {t.items[3].period}</p>
					<h3 class="text-2xl font-epilogue text-white mb-4 uppercase">{t.items[3].role}</h3>
					<p class="text-gray-400 font-grotesk leading-relaxed relative z-10">
						{t.items[3].desc}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
