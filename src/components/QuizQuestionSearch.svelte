<script lang="ts">
  import type { Question, Quiz } from "../types/Quiz";
  import Button from "./Button.svelte";

  export let quizzes: Quiz[];
  export let searchTerm: string;

  export let selected: (Question & { quiz: Quiz }) | null = null;

  $: results = quizzes.flatMap((quiz) =>
    quiz.questions
      .filter((question) =>
        question.question.toLowerCase().includes(searchTerm.trim().toLowerCase())
      )
      .map((result) => ({ ...result, quiz: quiz }))
  );

  $: displayList = results.slice(0, 10);
</script>

{#each displayList as result}
  <div class="my-2 border-t py-2">
    <p class="text-sm">{result.quiz.displayName} #{result.number + 1}</p>
    <p class="line-clamp-1 font-medium">{result.question}</p>
    <Button primary on:click={() => (selected = result)}>Select</Button>
  </div>
{/each}

{#if displayList.length === 0}
  <p>No results found. Try to search for terms that appear in the question.</p>
{/if}
