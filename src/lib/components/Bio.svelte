<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].bio);

	let scrollY = $state(0);
	let sectionEl: HTMLElement | undefined = $state(undefined);
	let visible = $state(false);

	$effect(() => {
		if (!sectionEl) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) visible = true;
			},
			{ threshold: 0.2 }
		);
		observer.observe(sectionEl);
		return () => observer.disconnect();
	});
</script>

<svelte:window bind:scrollY />

<section
	id="bio"
	bind:this={sectionEl}
	class="py-24 px-6 relative border-t border-surface-container-highest overflow-hidden"
>
	<!-- Ambient background effects -->
	<div class="absolute inset-0 bg-surface-container-low opacity-50 z-0"></div>
	<div
		class="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] z-0"
		style="transform: translateY({scrollY * 0.1}px)"
	></div>

	<div class="max-w-5xl mx-auto relative z-10">
		<div class="flex flex-col md:flex-row gap-12 items-start justify-between">
			<!-- Title Section -->
			<div 
				class="flex flex-col gap-4 max-w-sm transition-all duration-700 ease-out {visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}"
			>
				<div class="inline-block border-l-4 border-secondary pl-4 mb-2">
					<p class="font-grotesk tracking-[0.3em] uppercase text-xs text-secondary">Ident Data</p>
				</div>
				<h2 class="text-4xl md:text-5xl font-epilogue uppercase text-white tracking-widest leading-tight">
					{t.titlePre} <br/>
					<span class="text-primary text-neon-primary">{t.titlePost}</span>
				</h2>
			</div>

			<!-- Bio Grid -->
			<div 
				class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-2/3 transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
				style="transition-delay: 200ms;"
			>
				<!-- Name -->
				<div class="group brutal-border bg-surface p-6 overflow-hidden relative hover:bg-surface-container-high transition-colors duration-300">
					<div class="absolute top-0 right-0 w-8 h-8 bg-surface-container-highest flex items-center justify-center border-l border-b border-white/10 group-hover:bg-primary transition-colors">
						<span class="material-symbols-outlined text-xs text-gray-500 group-hover:text-surface">fingerprint</span>
					</div>
					<p class="font-grotesk text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-2">{t.nameLabel}</p>
					<p class="font-epilogue text-2xl text-white uppercase font-bold tracking-wider group-hover:text-primary transition-colors">{t.nameValue}</p>
				</div>

				<!-- Age -->
				<div class="group brutal-border bg-surface p-6 overflow-hidden relative hover:bg-surface-container-high transition-colors duration-300">
					<div class="absolute top-0 right-0 w-8 h-8 bg-surface-container-highest flex items-center justify-center border-l border-b border-white/10 group-hover:bg-secondary transition-colors">
						<span class="material-symbols-outlined text-xs text-gray-500 group-hover:text-surface">hourglass_empty</span>
					</div>
					<p class="font-grotesk text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-2">{t.ageLabel}</p>
					<p class="font-epilogue text-2xl text-white uppercase font-bold tracking-wider group-hover:text-secondary transition-colors">{t.ageValue}</p>
				</div>

				<!-- Location -->
				<div class="group brutal-border bg-surface p-6 overflow-hidden relative hover:bg-surface-container-high transition-colors duration-300 sm:col-span-2 md:col-span-1">
					<div class="absolute top-0 right-0 w-8 h-8 bg-surface-container-highest flex items-center justify-center border-l border-b border-white/10 group-hover:bg-tertiary transition-colors">
						<span class="material-symbols-outlined text-xs text-gray-500 group-hover:text-surface">my_location</span>
					</div>
					<p class="font-grotesk text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-2">{t.locationLabel}</p>
					<p class="font-epilogue text-2xl text-white uppercase font-bold tracking-wider group-hover:text-tertiary transition-colors">{t.locationValue}</p>
				</div>

				<!-- Hobbies -->
				<div class="group brutal-border bg-surface p-6 overflow-hidden relative hover:bg-surface-container-high transition-colors duration-300 sm:col-span-2">
					<div class="absolute top-0 right-0 w-8 h-8 bg-surface-container-highest flex items-center justify-center border-l border-b border-white/10 group-hover:bg-white transition-colors">
						<span class="material-symbols-outlined text-xs text-gray-500 group-hover:text-surface">code_blocks</span>
					</div>
					<p class="font-grotesk text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-3">{t.hobbiesLabel}</p>
					<div class="flex flex-wrap gap-2">
						{#each t.hobbiesValue.split(', ') as hobby}
							<span class="px-3 py-1 bg-surface-container-high text-xs font-grotesk tracking-widest uppercase text-gray-300 border border-white/10 group-hover:border-white/30 transition-colors">
								{hobby}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
