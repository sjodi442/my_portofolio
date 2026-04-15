<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].teaching);
</script>

<section class="py-24 px-6 relative bg-surface-container-low">
	<div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
		
		<!-- Left: Video/Image Interface -->
		<div class="w-full lg:w-1/2 relative group cursor-pointer">
			<div class="absolute -inset-4 border border-surface-container-high translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 pointer-events-none"></div>
			
			<div class="relative brutal-border bg-surface overflow-hidden aspect-video z-10 flex items-center justify-center">
				<img 
					src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
					alt="Teaching session"
					class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" 
					loading="lazy"
				/>
				
				<!-- Play button overlay -->
				<div class="relative z-20 w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-neon-secondary group-hover:scale-110 transition-transform duration-300">
					<span class="material-symbols-outlined text-surface text-4xl ml-2">play_arrow</span>
				</div>
				
				<!-- UI decorative elements -->
				<div class="absolute top-4 left-4 flex gap-2 z-20">
					<div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
					<div class="text-[10px] font-grotesk text-white tracking-widest">REC STATE</div>
				</div>
			</div>
		</div>

		<!-- Right: Methodology Text -->
		<div class="w-full lg:w-1/2">
			<h2 class="text-4xl md:text-5xl font-epilogue uppercase text-white mb-6">
				{t.title1} <br/>
				<span class="text-secondary text-neon-secondary">{t.titleColor1}</span>
			</h2>
			
			<p class="font-grotesk text-gray-400 leading-relaxed mb-10 max-w-lg">
				{t.desc}
			</p>
			
			<div class="flex flex-col gap-8">
				<div class="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
					<div class="mt-1 bg-surface-container-high p-2 text-secondary">
						<span class="material-symbols-outlined text-xl">language</span>
					</div>
					<div>
						<h4 class="font-epilogue font-bold text-white uppercase text-lg mb-1">{t.method1Title}</h4>
						<p class="font-grotesk text-sm text-gray-400">{t.method1Desc}</p>
					</div>
				</div>
				
				<div class="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
					<div class="mt-1 bg-surface-container-high p-2 text-primary">
						<span class="material-symbols-outlined text-xl">model_training</span>
					</div>
					<div>
						<h4 class="font-epilogue font-bold text-white uppercase text-lg mb-1">{t.method2Title}</h4>
						<p class="font-grotesk text-sm text-gray-400">{t.method2Desc}</p>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</section>
