<script>
  import "@fontsource-variable/outfit";
  import "../app.css";
</script>

<svelte:head>
  <meta name="application-name" content="WebQuiz" />
  <meta name="author" content="FluxCapacitor2" />
  <link rel="author" href="https://github.com/FluxCapacitor2/" />
  <meta
    name="description"
    content="Online quizzes to help you study for AP Environmental Science in-class exams and the AP exam." />
</svelte:head>

<slot />

<footer class="mx-auto max-w-max pt-12 opacity-70 transition-all hover:opacity-100 print:hidden">
  A project by <a href="https://bswanson.dev/"
    ><img
      src="https://bswanson.dev/favicon.svg"
      width={16}
      height={16}
      alt=""
      class="inline" />
    Brendan Swanson</a>
  &mdash; Content from the
  <a href="https://webquiz.ilrn.com/" class="font-medium underline">retired</a> Cengage WebQuiz
  website &mdash; Made with
  <a href="https://kit.svelte.dev/" class="font-medium underline">SvelteKit</a> &mdash;
  <a
    href="https://github.com/FluxCapacitor2/webquiz-svelte/issues/new"
    class="font-medium underline">Report an error</a>
</footer>
