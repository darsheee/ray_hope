<script>
  import "@fontsource-variable/outfit";
  import "../app.css";
</script>

<slot />

<footer class="mx-auto max-w-max pt-12 opacity-70 transition-all hover:opacity-100 print:hidden">
  A side project by <a href="https://github.com/FluxCapacitor2/"
    ><img
      src="https://avatars.githubusercontent.com/u/31071265?v=4"
      width={16}
      height={16}
      alt=""
      class="inline"
    />
    FluxCapacitor2</a
  >
  &mdash; Content from the
  <a href="https://webquiz.ilrn.com/" class="font-medium underline">retired</a> Cengage WebQuiz
  website &mdash; Made with
  <a href="https://kit.svelte.dev/" class="font-medium underline">SvelteKit</a>
</footer>
