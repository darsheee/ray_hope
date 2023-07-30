<script lang="ts">
  import { page } from "$app/stores";
</script>

<main class="mx-auto my-12">
  <h1 class="text-5xl font-bold">{$page.status}</h1>
  <p class="font-medium">{$page.error?.message}</p>
</main>
