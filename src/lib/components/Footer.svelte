<script lang="ts">
  import { i18n, dict } from "$lib/i18n.svelte";
  let t = $derived(dict[i18n.locale as keyof typeof dict].footer);
</script>

<footer class="py-8 px-6 bg-surface border-t border-surface-container-highest">
  <div
    class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
  >
    <div
      class="font-epilogue font-bold text-sm tracking-widest text-white uppercase opacity-50 hover:opacity-100 transition-opacity"
    >
      MIDNIGHT ARCHITECT // JODI
    </div>

    <div
      class="flex gap-8 text-xs font-grotesk tracking-[0.2em] text-gray-500 uppercase"
    >
      <a
        href="https://www.linkedin.com/in/setiawan-jodi-308938128/"
        target="_blank"
        rel="noreferrer"
        class="hover:text-secondary transition-colors"
        aria-label="Visit Jodi's LinkedIn Profile">LinkedIn</a
      >
      <a
        href="https://github.com/sjodi442"
        target="_blank"
        rel="noreferrer"
        class="hover:text-primary transition-colors"
        aria-label="Visit Jodi's GitHub Profile">GitHub</a
      >
    </div>

    <div
      class="text-[10px] font-grotesk tracking-widest text-gray-600 uppercase"
    >
      {t.copyrightPre}
      {new Date().getFullYear()}
      {t.copyrightPost}
    </div>
  </div>
</footer>
