<script>
  import "@fontsource-variable/outfit";
  import "../app.css";
</script>

<svelte:head>
  <meta name="application-name" content="WebQuiz" />
  <link rel="icon" href="/favicon.ico" sizes="32x32" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.webmanifest" />
  <meta name="author" content="FluxCapacitor2" />
  <link rel="author" href="https://github.com/FluxCapacitor2/" />
  <meta
    name="description"
    content="Online quizzes to help you study for AP Environmental Science in-class exams and the AP exam." />
</svelte:head>

<slot />

<footer class="bg-primary-100 -mx-4 mt-24 py-6 dark:bg-neutral-900 print:hidden">
  <div class="container mx-auto px-2">
    <h2 class="text-3xl font-bold">WebQuiz</h2>
    <div class="flex flex-col gap-4 lg:flex-row lg:justify-between">
      <div>
        <p>
          A project by{" "}<a href="https://bswanson.dev/" target="_blank"
            ><img
              src="https://bswanson.dev/favicon.svg"
              width={16}
              height={16}
              alt=""
              class="inline" />
            <span class="font-medium underline"> Brendan Swanson </span></a>
          &mdash;{" "}
          Content from the
          <a href="https://webquiz.ilrn.com/" class="font-medium underline">retired</a> Cengage site
        </p>
        <p class="opacity-75">
          View the old version <a
            href="https://webquiz-vue.bswanson.dev"
            class="font-medium underline">here</a
          >. Icon by Freepik on
          <a href="https://www.flaticon.com/free-icon/leaf_392071" class="font-medium underline"
            >Flaticon</a
          >.
        </p>
      </div>
      <div class="flex gap-4">
        <button
          on:click={(e) => {
            e.preventDefault();
            window.print();
          }}
          class="inline-flex items-start font-medium underline">Print this page</button>
        <a
          href="https://github.com/FluxCapacitor2/webquiz-svelte/issues/new"
          class="font-medium underline"
          target="_blank">Report an error</a>

        <a
          href="https://github.com/FluxCapacitor2/webquiz-svelte/"
          target="_blank"
          class="font-medium underline">View source code</a>
      </div>
    </div>
  </div>

  <script
    src="https://static.cloudflareinsights.com/beacon.min.js"
    data-cf-beacon={'{"token": "343c6fb2a45f424dac0de8affe3c0ece"}'}></script>
</footer>
