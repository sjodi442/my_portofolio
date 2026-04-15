<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].contact);
	
	let status = $state<'idle' | 'submitting' | 'success'>('idle');
	
	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		status = 'submitting';
		// Fake network request
		setTimeout(() => {
			status = 'success';
			// Reset form after a few seconds
			setTimeout(() => {
				status = 'idle';
				(e.target as HTMLFormElement).reset();
			}, 3000);
		}, 1500);
	}
</script>

<section id="contact" class="py-32 px-6 relative border-t border-surface-container-highest bg-surface-container-low min-h-screen flex items-center">
	<div class="max-w-3xl mx-auto w-full text-center">
		
		<h2 class="text-4xl md:text-6xl font-epilogue uppercase text-white mb-2 tracking-wider">
			{t.titlePre} <span class="text-primary text-neon-primary">{t.titlePost}</span>
		</h2>
		<p class="font-grotesk text-sm text-gray-400 mb-16 italic tracking-wider">
			{t.desc}
		</p>
		
		<form class="flex flex-col gap-10 text-left" onsubmit={handleSubmit} name="contact">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
				<div class="flex flex-col gap-2">
					<label for="name" class="font-grotesk text-[10px] tracking-[0.2em] text-gray-500 uppercase">{t.nameLabel}</label>
					<input type="text" id="name" name="name" class="input-brutal text-white" placeholder="ENTER IDENTIFIER..." required />
				</div>
				<div class="flex flex-col gap-2">
					<label for="email" class="font-grotesk text-[10px] tracking-[0.2em] text-gray-500 uppercase">{t.emailLabel}</label>
					<input type="email" id="email" name="email" class="input-brutal text-white" placeholder="ENTER ADDRESS..." required />
				</div>
			</div>
			
			<div class="flex flex-col gap-2">
				<label for="message" class="font-grotesk text-[10px] tracking-[0.2em] text-gray-500 uppercase">{t.msgLabel}</label>
				<textarea id="message" name="message" rows="4" class="input-brutal text-white resize-none" placeholder="ENCODE MESSAGE HERE..." required></textarea>
			</div>
			
			<button type="submit" disabled={status !== 'idle'} class="mt-8 bg-primary text-surface px-8 py-4 font-bold hover:bg-white transition-colors brutal-border shadow-neon-primary text-sm uppercase tracking-widest mx-auto w-full md:w-auto min-w-[250px] disabled:opacity-50 disabled:cursor-not-allowed">
				{#if status === 'submitting'}
					SENDING...
				{:else if status === 'success'}
					MESSAGE DELIVERED
				{:else}
					{t.submit}
				{/if}
			</button>
		</form>
		
	</div>
</section>
