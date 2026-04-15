<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].gallery);
	
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

	// Mock & Real data for the gallery
	const galleryItems = [
		{
			id: 1,
			title: 'Construction & Scaffolding',
			location: 'Tokyo, Japan',
			image: '/construction-record.jpg',
			span: 'md:col-span-2 md:row-span-2',
			textColor: 'text-secondary',
			groupTextColor: 'group-hover:text-secondary',
			borderColor: 'group-hover:border-secondary'
		},
		{
			id: 2,
			title: 'Akihabara Nights',
			location: 'Tokyo, Japan',
			image: '/akihabara-night.jpg',
			span: 'md:col-span-1 md:row-span-2',
			textColor: 'text-primary',
			groupTextColor: 'group-hover:text-primary',
			borderColor: 'group-hover:border-primary'
		},
		{
			id: 3,
			title: 'Web Engineering',
			location: 'Solo, Indonesia',
			image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
			span: 'md:col-span-1 md:row-span-1',
			textColor: 'text-white',
			groupTextColor: 'group-hover:text-white',
			borderColor: 'group-hover:border-white'
		},
		{
			id: 4,
			title: 'SSW Preparation',
			location: 'Training Center',
			image: '/teaching-ssw.jpg',
			span: 'md:col-span-1 md:row-span-1',
			textColor: 'text-secondary',
			groupTextColor: 'group-hover:text-secondary',
			borderColor: 'group-hover:border-secondary'
		},
		{
			id: 5,
			title: 'Language Instruction',
			location: 'Solo, Indonesia',
			image: '/teaching-japanese.jpg',
			span: 'md:col-span-2 md:row-span-1',
			textColor: 'text-primary',
			groupTextColor: 'group-hover:text-primary',
			borderColor: 'group-hover:border-primary'
		},
		{
			id: 6,
			title: 'Tokyo 2020 Volunteer',
			location: 'Oi Hockey Stadium, Tokyo',
			image: '/olympics-volunteer.jpg',
			span: 'md:col-span-2 md:row-span-1',
			textColor: 'text-tertiary',
			groupTextColor: 'group-hover:text-tertiary',
			borderColor: 'group-hover:border-tertiary'
		}
	];
</script>

<svelte:window bind:scrollY />

<section
	id="gallery"
	bind:this={sectionEl}
	class="py-24 px-6 relative border-t border-surface-container-highest overflow-hidden"
>
	<!-- Ambient background effects -->
	<div class="absolute inset-0 bg-surface-container-low opacity-50 z-0"></div>
	<div
		class="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] z-0"
	></div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div
			class="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
		>
			<div class="flex items-center gap-6">
				<div class="h-[2px] w-16 bg-surface-container-highest"></div>
				<h2 class="text-2xl md:text-5xl font-epilogue uppercase text-white tracking-widest">
					{t.titlePre} <span class="text-secondary text-neon-secondary">{t.titlePost}</span>
				</h2>
			</div>
			<p class="font-grotesk text-gray-400 max-w-sm text-sm md:text-right border-l md:border-l-0 md:border-r border-surface-container-highest pl-4 md:pl-0 md:pr-4">
				{t.desc}
			</p>
		</div>

		<!-- Gallery Grid -->
		<div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
			{#each galleryItems as item, i}
				<div
					class="group relative brutal-border bg-surface overflow-hidden {item.span} transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}"
					style="transition-delay: {(i + 1) * 100}ms;"
				>
					<!-- The Image -->
					<img
						src={item.image}
						alt={t.items[i].title}
						width="800"
						height="800"
						loading="lazy"
						class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
					/>
					
					<!-- Inner Gradient Overlay -->
					<div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

					<!-- Content on Hover -->
					<div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
						<div class="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
							<span class="material-symbols-outlined text-sm {item.textColor}">location_on</span>
							<span class="font-grotesk text-[10px] tracking-[0.2em] text-gray-300 uppercase">{t.items[i].location}</span>
						</div>
						<h3 class="font-epilogue text-xl md:text-2xl uppercase text-white {item.groupTextColor} transition-colors duration-500">
							{t.items[i].title}
						</h3>
					</div>
					
					<!-- Corner Borders -->
					<div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-surface-container-highest {item.borderColor} transition-colors duration-500"></div>
					<div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-surface-container-highest {item.borderColor} transition-colors duration-500"></div>
				</div>
			{/each}
		</div>
	</div>
</section>
