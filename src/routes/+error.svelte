<script lang="ts">
  import { page } from "$app/stores";
  import Button from "../components/Button.svelte";
</script>

<main class="my-12 text-center">
  <h1 class="text-9xl font-bold">{$page.status}</h1>
  <p class="mb-12 text-xl font-medium">{$page.error?.message}</p>

  <a href="/"><Button>&larr; Back Home</Button></a>
</main>
