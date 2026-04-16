<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].projects);
</script>

<section class="py-24 px-6 relative bg-surface-container-lowest">
	<div class="max-w-7xl mx-auto">
		<div class="flex items-center gap-6 mb-16">
			<div class="h-[2px] w-16 bg-surface-container-highest"></div>
			<h2 class="text-2xl md:text-4xl font-epilogue uppercase text-white tracking-widest">{t.title}</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
			{#each t.items as item, i}
				{@const borders = ['hover:border-l-primary', 'hover:border-l-secondary', 'hover:border-l-tertiary']}
				{@const texts = ['text-primary', 'text-secondary', 'text-tertiary']}
				{@const groupTexts = ['group-hover:text-primary', 'group-hover:text-secondary', 'group-hover:text-tertiary']}
				{@const shadows = [
					'hover:shadow-[-5px_0_15px_-3px_rgba(199,153,255,0.4)]',
					'hover:shadow-[-5px_0_15px_-3px_rgba(23,222,202,0.4)]',
					'hover:shadow-[-5px_0_15px_-3px_rgba(255,171,243,0.4)]'
				]}
				<a href="{item.link}" target="_blank" rel="noopener noreferrer" class="group relative bg-surface-container-low brutal-border p-8 transition-all hover:bg-surface border-l-4 border-l-transparent {borders[i % borders.length]} {shadows[i % shadows.length]} flex flex-col h-full hover:-translate-y-1">
					<p class="font-grotesk text-[10px] tracking-[0.2em] {texts[i % texts.length]} mb-4 uppercase font-bold">{item.cat}</p>
					<h3 class="text-xl font-epilogue uppercase text-white mb-4 line-clamp-2">{item.title}</h3>
					<p class="font-grotesk text-sm text-gray-400 leading-relaxed mb-8 flex-grow">
						{item.desc}
					</p>
					
					<div class="flex items-center justify-between text-xs font-grotesk text-gray-500 uppercase mt-auto">
						<span class="group-hover:text-white transition-colors">{t.visit}</span>
						<span class="material-symbols-outlined text-sm {groupTexts[i % groupTexts.length]} transition-colors">open_in_new</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
