<script lang="ts">
  import Button from "./Button.svelte";

  export let slug: string;
  export let name: string;

  let className: string = "";
  export { className as class };
</script>

<a href="/quiz/{slug}" class={className}>
  <Button class="w-full">
    <h3 class="font-bold">{name}</h3>
  </Button>
</a>
