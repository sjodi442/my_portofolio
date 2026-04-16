<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Bio from '$lib/components/Bio.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Teaching from '$lib/components/Teaching.svelte';
	import Toolkit from '$lib/components/Toolkit.svelte';
	import Credentials from '$lib/components/Credentials.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Midnight Architect | Jodi - Japanese Language Instructor</title>
	<meta name="description" content="Portfolio of Jodi, a Japanese Language Instructor and Intercultural Mediator bridging cultures through language, construction, and QC experience." />
	<meta name="keywords" content="Japanese Instructor, Translation, JLPT N3, Intercultural Mediation, Japanese construction, SSW Certifications" />
	<meta name="author" content="Jodi" />
	
	<!-- Canonical URL (Placeholder) -->
	<link rel="canonical" href="https://jodi-portfolio.pages.dev" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://jodi-portfolio.pages.dev" />
	<meta property="og:title" content="Midnight Architect | Jodi - Japanese Language Instructor" />
	<meta property="og:description" content="Portfolio of Jodi, bridging Japanese cultures through language and experience." />
	<meta property="og:image" content="https://images.unsplash.com/photo-1542051812871-757500850028?q=80&w=1200&auto=format&fit=crop" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://jodi-portfolio.pages.dev" />
	<meta property="twitter:title" content="Midnight Architect | Jodi - Japanese Language Instructor" />
	<meta property="twitter:description" content="Portfolio of Jodi, bridging Japanese cultures through language and experience." />
	<meta property="twitter:image" content="https://images.unsplash.com/photo-1542051812871-757500850028?q=80&w=1200&auto=format&fit=crop" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">
		{
			"@context": "https://schema.org/",
			"@type": "Person",
			"name": "Jodi",
			"jobTitle": "Japanese Language Instructor & Intercultural Mediator",
			"url": "https://jodi-portfolio.pages.dev",
			"knowsLanguage": ["English", "Japanese", "Indonesian"],
			"description": "A multi-faceted journey from the industrial foundations of Japan to language instruction."
		}
	</script>`}
</svelte:head>

<Navbar />

<main>
	<Hero />
	<Bio />
	<Timeline />
	<Teaching />
	<Toolkit />
	<Credentials />
	<Projects />
	<Gallery />
	<Contact />
</main>

<Footer />
