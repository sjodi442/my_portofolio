<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].toolkit);
	
	let scrollY = $state(0);
	let sectionEl: HTMLElement | undefined = $state(undefined);
	let visible = $state(false);

	$effect(() => {
		if (!sectionEl) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) visible = true;
			},
			{ threshold: 0.15 }
		);
		observer.observe(sectionEl);
		return () => observer.disconnect();
	});
</script>

<svelte:window bind:scrollY />

<section
	id="toolkit"
	bind:this={sectionEl}
	class="pt-24 pb-48 px-6 relative border-t border-surface-container-highest overflow-hidden"
>
	<!-- Ambient background effects -->
	<div class="absolute inset-0 bg-surface-container opacity-30 z-0"></div>
	<div
		class="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[180px] z-0 transition-transform duration-75 ease-out"
		style="transform: translateY({scrollY * -0.04}px)"
	></div>
	<div
		class="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[150px] z-0 transition-transform duration-75 ease-out"
		style="transform: translateY({scrollY * -0.06}px)"
	></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<!-- Section Header -->
		<div
			class="mb-20 text-center transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
		>
			<p class="font-grotesk tracking-[0.3em] uppercase text-xs text-secondary mb-4">
				{t.badge}
			</p>
			<h2 class="text-4xl md:text-7xl font-epilogue uppercase text-white tracking-wider">
				{t.titlePre}
				<span
					class="relative inline-block text-primary text-neon-primary bg-surface px-4 brutal-border rotate-[-2deg] -ml-2"
				>
					{t.titlePost}
					<!-- Animated corner accents -->
					<span class="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary animate-pulse"></span>
					<span class="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary animate-pulse [animation-delay:0.5s]"></span>
					<span class="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary animate-pulse [animation-delay:1s]"></span>
					<span class="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary animate-pulse [animation-delay:1.5s]"></span>
				</span>
			</h2>
			<div class="flex items-center justify-center gap-2 mt-8">
				<div class="h-[2px] w-12 bg-surface-container-highest"></div>
				<div class="h-1 w-24 bg-secondary shadow-neon-secondary"></div>
				<div class="h-[2px] w-12 bg-surface-container-highest"></div>
			</div>
		</div>

		<!-- Premium Bento Grid -->
		<div class="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[180px]">

			<!-- ═══════════ LARGE FEATURE: Translation ═══════════ -->
			<div
				class="md:col-span-4 md:row-span-2 relative group transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
				style="transition-delay: 100ms;"
			>
				<!-- Animated border glow -->
				<div class="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
				<div class="relative h-full brutal-border bg-surface-container-low p-8 md:p-10 overflow-hidden flex flex-col justify-between">
					<!-- Background pattern -->
					<div class="absolute inset-0 bg-seigaiha opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
					<!-- Floating accent -->
					<div class="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-primary/10 blur-[60px] group-hover:bg-primary/25 group-hover:scale-150 transition-all duration-700"></div>

					<div class="relative z-10 flex flex-col h-full justify-between">
						<div class="flex items-start justify-between">
							<div class="text-primary bg-surface/80 w-16 h-16 flex items-center justify-center brutal-border shadow-neon-primary group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(199,153,255,0.6)] transition-all duration-500">
								<span class="material-symbols-outlined !text-4xl">translate</span>
							</div>
							<span class="font-grotesk text-[10px] tracking-[0.3em] uppercase text-gray-500 bg-surface-container-high px-3 py-1 brutal-border">{t.featured}</span>
						</div>
						<div class="mt-auto">
							<h3 class="text-3xl md:text-4xl font-epilogue uppercase text-white mb-3 group-hover:text-primary transition-colors duration-500">
								{t.items.translation.title}
							</h3>
							<p class="font-grotesk text-gray-400 max-w-lg leading-relaxed">
								{t.items.translation.desc}
							</p>

							<!-- Tech tags -->
							<div class="flex flex-wrap gap-2 mt-5">
								{#each t.items.translation.tags as tag}
									<span class="font-grotesk text-[10px] tracking-widest uppercase px-3 py-1 border border-surface-container-highest text-gray-500 group-hover:border-primary/40 group-hover:text-primary transition-all duration-500">
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- ═══════════ STAT: JLPT N3 ═══════════ -->
			<div
				class="md:col-span-2 md:row-span-1 relative group transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
				style="transition-delay: 200ms;"
			>
				<div class="absolute -inset-[1px] bg-gradient-to-br from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
				<div class="relative h-full brutal-border bg-surface-container-low p-6 overflow-hidden flex flex-col justify-center items-center text-center">
					<div class="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

					<!-- Animated ring -->
					<div class="absolute inset-4 border border-secondary/10 rounded-full group-hover:border-secondary/30 group-hover:scale-110 transition-all duration-700 ease-out"></div>

					<div class="relative z-10">
						<h4 class="font-epilogue text-4xl md:text-5xl font-bold uppercase text-secondary text-neon-secondary mb-1 group-hover:scale-110 transition-transform duration-500">
							{t.items.jlpt.title}
						</h4>
						<p class="font-grotesk text-[10px] tracking-[0.3em] text-gray-500 uppercase">
							{t.items.jlpt.label}
						</p>
					</div>
				</div>
			</div>

			<!-- ═══════════ STAT: Experience ═══════════ -->
			<div
				class="md:col-span-2 md:row-span-1 relative group transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
				style="transition-delay: 300ms;"
			>
				<div class="absolute -inset-[1px] bg-gradient-to-bl from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
				<div class="relative h-full brutal-border bg-surface-container-low p-6 overflow-hidden flex flex-col justify-center items-center text-center">
					<div class="absolute inset-0 bg-gradient-to-tr from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

					<!-- Counter-style display -->
					<div class="absolute inset-4 border border-primary/10 rounded-full group-hover:border-primary/30 group-hover:scale-110 transition-all duration-700 ease-out"></div>

					<div class="relative z-10">
						<h4 class="font-epilogue text-4xl md:text-5xl font-bold uppercase text-primary text-neon-primary mb-1 group-hover:scale-110 transition-transform duration-500">
							{t.items.experience.title}
						</h4>
						<p class="font-grotesk text-[10px] tracking-[0.3em] text-gray-500 uppercase">
							{t.items.experience.label}
						</p>
					</div>
				</div>
			</div>

			<!-- ═══════════ Intercultural Mediation ═══════════ -->
			<div
				class="md:col-span-3 md:row-span-1 relative group transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
				style="transition-delay: 400ms;"
			>
				<div class="absolute -inset-[1px] bg-gradient-to-r from-tertiary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
				<div class="relative h-full brutal-border bg-surface-container-low p-6 md:p-8 overflow-hidden flex items-center gap-6">
					<div class="absolute -right-10 -bottom-10 w-40 h-40 bg-tertiary/10 rounded-full blur-[50px] group-hover:bg-tertiary/25 group-hover:scale-150 transition-all duration-700"></div>

					<div class="relative z-10 flex-shrink-0 text-tertiary bg-surface/80 w-14 h-14 flex items-center justify-center brutal-border shadow-neon-tertiary group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,171,243,0.5)] transition-all duration-500">
						<span class="material-symbols-outlined !text-3xl">forum</span>
					</div>
					<div class="relative z-10 flex-1 min-w-0">
						<h4 class="font-epilogue font-bold uppercase text-white mb-1 group-hover:text-tertiary transition-colors duration-500">
							{t.items.mediation.title}
						</h4>
						<p class="font-grotesk text-xs text-gray-400 leading-relaxed">
							{t.items.mediation.desc}
						</p>
					</div>
				</div>
			</div>

			<!-- ═══════════ Web Engineering ═══════════ -->
			<div
				class="md:col-span-3 md:row-span-1 relative group transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
				style="transition-delay: 500ms;"
			>
				<div class="absolute -inset-[1px] bg-gradient-to-l from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
				<div class="relative h-full brutal-border bg-surface-container-low p-6 md:p-8 overflow-hidden flex items-center gap-6">
					<div class="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-[50px] group-hover:bg-white/15 group-hover:scale-150 transition-all duration-700"></div>

					<div class="relative z-10 flex-shrink-0 text-white bg-surface/80 w-14 h-14 flex items-center justify-center brutal-border group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-all duration-500">
						<span class="material-symbols-outlined !text-3xl">code</span>
					</div>
					<div class="relative z-10 flex-1 min-w-0">
						<h4 class="font-epilogue font-bold uppercase text-white mb-1">
							{t.items.web.title}
						</h4>
						<p class="font-grotesk text-xs text-gray-400 leading-relaxed mb-3">
							{t.items.web.desc}
						</p>
						<!-- Tech stack pills with glow -->
						<div class="flex flex-wrap gap-2">
							{#each [
								{ name: 'Svelte', color: 'text-orange-400 border-orange-400/30' },
								{ name: 'Next.js', color: 'text-white border-white/30' },
								{ name: 'Laravel', color: 'text-red-400 border-red-400/30' }
							] as tech}
								<span class="font-grotesk text-[10px] tracking-widest uppercase px-2.5 py-0.5 border {tech.color} group-hover:shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-shadow duration-500">
									{tech.name}
								</span>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- ═══════════ Teaching Methodology ═══════════ -->
			<div
				class="md:col-span-2 md:row-span-1 relative group transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
				style="transition-delay: 600ms;"
			>
				<div class="absolute -inset-[1px] bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
				<div class="relative h-full brutal-border bg-surface-container-low p-6 overflow-hidden flex flex-col justify-between">
					<div class="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

					<div class="relative z-10 text-secondary bg-surface/80 w-12 h-12 flex items-center justify-center brutal-border shadow-neon-secondary group-hover:scale-110 transition-all duration-500">
						<span class="material-symbols-outlined !text-2xl">school</span>
					</div>
					<div class="relative z-10">
						<h4 class="font-epilogue font-bold uppercase text-white text-sm mb-1 group-hover:text-secondary transition-colors duration-500">
							{t.items.teaching.title}
						</h4>
						<p class="font-grotesk text-[11px] text-gray-500">
							{t.items.teaching.desc}
						</p>
					</div>
				</div>
			</div>

			<!-- ═══════════ SSW Certifications ═══════════ -->
			<div
				class="md:col-span-2 md:row-span-1 relative group transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
				style="transition-delay: 700ms;"
			>
				<div class="absolute -inset-[1px] bg-gradient-to-t from-tertiary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
				<div class="relative h-full brutal-border bg-surface-container-low p-6 overflow-hidden flex flex-col justify-between">
					<div class="absolute inset-0 bg-gradient-to-b from-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

					<div class="relative z-10 text-tertiary bg-surface/80 w-12 h-12 flex items-center justify-center brutal-border shadow-neon-tertiary group-hover:scale-110 transition-all duration-500">
						<span class="material-symbols-outlined !text-2xl">verified</span>
					</div>
					<div class="relative z-10">
						<h4 class="font-epilogue font-bold uppercase text-white text-sm mb-1 group-hover:text-tertiary transition-colors duration-500">
							{t.items.ssw.title}
						</h4>
						<p class="font-grotesk text-[11px] text-gray-500">
							{t.items.ssw.desc}
						</p>
					</div>
				</div>
			</div>

			<!-- ═══════════ Industrial Safety ═══════════ -->
			<div
				class="md:col-span-2 md:row-span-1 relative group transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
				style="transition-delay: 800ms;"
			>
				<div class="absolute -inset-[1px] bg-gradient-to-t from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
				<div class="relative h-full brutal-border bg-surface-container-low p-6 overflow-hidden flex flex-col justify-between">
					<div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

					<div class="relative z-10 text-white bg-surface/80 w-12 h-12 flex items-center justify-center brutal-border group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-all duration-500">
						<span class="material-symbols-outlined !text-2xl">construction</span>
					</div>
					<div class="relative z-10">
						<h4 class="font-epilogue font-bold uppercase text-white text-sm mb-1">
							{t.items.safety.title}
						</h4>
						<p class="font-grotesk text-[11px] text-gray-500">
							{t.items.safety.desc}
						</p>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
