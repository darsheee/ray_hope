<script lang="ts">
  import type { Question } from "../types/Quiz";

  export let grouped: Record<"Correct" | "Incorrect" | "Unanswered", Question[]>;

  $: total = Object.values(grouped).flat().length;
  $: totalAnswered = [...(grouped["Correct"] ?? []), ...(grouped["Incorrect"] ?? [])].length;
  $: correct = grouped["Correct"]?.length ?? 0;
</script>

<div
  class="mb-8 rounded-md bg-white p-4 shadow-md  print:p-0 print:shadow-none"
>
  <h2 class="text-2xl  font-bold">
    You scored: {correct} / {total} ({Math.round((correct / total) * 100)}%)
  </h2>
  {#if (grouped["Unanswered"]?.length ?? 0) > 0 && totalAnswered > 0}
    Of the questions you answered, you scored {correct} / {totalAnswered} ({Math.round(
      (correct / totalAnswered) * 100
    )}%)
  {/if}

  <div class="mt-2">
    <slot />
  </div>
</div>
