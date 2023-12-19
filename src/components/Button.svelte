<script lang="ts">
  let className: string = "";
  export let primary = false;
  export let type: "submit" | "reset" | "button" | undefined | null = "button";
  export { className as class };

  let variant = primary
    ? "bg-primary-400 dark:border text-black hover:bg-primary-500 focus:bg-primary-600"
    : "border border-gray-300";

  let classes = className + " " + variant;
</script>

<button
  on:click
  {type}
  class="{classes} rounded-md px-3 py-1 font-medium transition-colors border-gray-200 bg-gray-300 text-black hover:bg-gray-550 focus:border-gray-200 focus:bg-gray-500">
  <slot /></button>
