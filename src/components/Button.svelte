<script lang="ts">
  let className: string = "";
  export { className as class };
</script>

<button
  on:click
  class="{className} rounded-md border border-gray-300 bg-lime-50 px-3 py-1 font-medium transition-colors hover:bg-lime-100 focus:bg-lime-200 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:focus:border-gray-700 dark:focus:bg-gray-800">
  <slot /></button>
