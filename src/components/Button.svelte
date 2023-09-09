<script lang="ts">
  let className: string = "";
  export { className as class };
</script>

<button
  on:click
  class="{className} bg-primary-50 hover:bg-primary-100 focus:bg-primary-200 rounded-md border border-gray-300 px-3 py-1 font-medium transition-colors dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-950 dark:focus:border-gray-700 dark:focus:bg-gray-800">
  <slot /></button>
