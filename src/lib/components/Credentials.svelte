<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].credentials);
</script>

<section class="py-24 px-6 relative">
	<div class="max-w-7xl mx-auto">
		<div class="flex items-center gap-6 mb-16">
			<div class="h-[2px] w-16 bg-surface-container-highest"></div>
			<h2 class="text-2xl md:text-4xl font-epilogue uppercase text-white tracking-widest">{t.title}</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12">
			{#each t.items as item, i}
				{@const borders = ['hover:border-l-primary', 'hover:border-l-secondary', 'hover:border-l-tertiary']}
				{@const texts = ['text-primary', 'text-secondary', 'text-tertiary']}
				{@const groupTexts = ['group-hover:text-primary', 'group-hover:text-secondary', 'group-hover:text-tertiary']}
				{@const shadows = [
					'hover:shadow-[-5px_0_15px_-3px_rgba(199,153,255,0.4)]',
					'hover:shadow-[-5px_0_15px_-3px_rgba(23,222,202,0.4)]',
					'hover:shadow-[-5px_0_15px_-3px_rgba(255,171,243,0.4)]'
				]}
				<div class="group relative bg-surface-container-low brutal-border p-8 transition-colors hover:bg-surface border-l-4 border-l-transparent {borders[i % borders.length]} {shadows[i % shadows.length]}">
					<p class="font-grotesk text-[10px] tracking-[0.2em] {texts[i % texts.length]} mb-4 uppercase font-bold">{item.cat}</p>
					<h3 class="text-xl font-epilogue uppercase text-white mb-4">{item.title}</h3>
					<p class="font-grotesk text-sm text-gray-400 leading-relaxed mb-8">
						{item.desc}
					</p>
					
					<div class="flex items-center justify-between text-xs font-grotesk text-gray-500 uppercase mt-auto">
						<span>{t.verified}</span>
						<span class="material-symbols-outlined text-sm {groupTexts[i % groupTexts.length]} transition-colors">verified</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
