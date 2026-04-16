<script lang="ts">
	import { i18n, dict } from '$lib/i18n.svelte';
	let t = $derived(dict[i18n.locale as keyof typeof dict].contact);
	
	function handleAction(method: 'email' | 'whatsapp') {
		const form = document.forms.namedItem('contact') as HTMLFormElement;
		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}
		const data = new FormData(form);
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;
		
		if (method === 'email') {
			const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
			window.open(`mailto:sjodi442@gmail.com?subject=Portfolio Contact from ${name}&body=${body}`, '_blank');
		} else {
			const text = `Hi, my name is ${name} (${email}).\n\n${message}`;
			window.open(`https://wa.me/6285121016509?text=${encodeURIComponent(text)}`, '_blank');
		}
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
		
		<form class="flex flex-col gap-10 text-left" name="contact" onsubmit={(e) => e.preventDefault()}>
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
			
			<div class="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
				<button type="button" onclick={() => handleAction('email')} class="bg-primary text-surface px-8 py-4 font-bold hover:bg-white transition-colors brutal-border shadow-neon-primary text-sm uppercase tracking-widest w-full sm:w-1/2">
					EMAIL
				</button>
				<button type="button" onclick={() => handleAction('whatsapp')} class="bg-green-500 text-surface px-8 py-4 font-bold hover:bg-white transition-colors brutal-border shadow-[4px_4px_0px_#22c55e] hover:shadow-[4px_4px_0px_#fff] hover:text-black text-sm uppercase tracking-widest w-full sm:w-1/2">
					WHATSAPP
				</button>
			</div>
		</form>
		
	</div>
</section>
