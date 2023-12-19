<script lang="ts">
  import { browser } from "$app/environment";
  import type { Question, Quiz } from "../types/Quiz";

  let data: Question & { quiz: Quiz };
  export { data as question };

  export let id: string;
  export let showAnswer: boolean = false;
  export let displayNumber: number;

  let { quiz, question, choices, number, correct: correctChoice } = data;

  export let selection: number | undefined = undefined;
  export let disabled = false;
  $: isCorrect = selection === correctChoice;

  $: getClassName = (index: number) => {
    if (!showAnswer) return "";
    if (isCorrect) {
      if (index === correctChoice) {
        return "bg-green-500/30 print:text-green-600";
      } else {
        return "";
      }
    } else {
      if (index === selection) {
        return "bg-red-500/30 print:text-red-600";
      } else if (index !== correctChoice) {
        return "";
      } else {
        return "bg-green-500/30 print:text-green-600";
      }
    }
  };

  $: if (browser && selection) {
    localStorage.setItem(`webquiz_${quiz.id}_${number}`, selection.toString());
  }
</script>

<div class="mb-8 mt-2 border-2 border-red-200/100">
  {#if showAnswer}
    {#if selection === undefined}
      <p class="font-bold text-blue-800 dark:text-blue-400">Not answered</p>
    {:else if isCorrect}
      <p class="font-bold text-green-800 dark:text-green-400">Correct</p>
    {:else}
      <p class="font-bold text-red-800 dark:text-red-400">Incorrect</p>
    {/if}
  {/if}
  <h2 class="mb-1 font-medium">
    <span class="font-normal">{displayNumber}. </span>{question}
  </h2>

  {#each choices as choice, index}
    <label class="my-2 flex gap-1">
      <input
        type="radio"
        name={id}
        value={index}
        class="border-gray-900 bg-gray-100 {showAnswer
          ? 'text-gray-600'
          : 'text-lime-600 focus:ring-2 focus:ring-lime-500'}"
        bind:group={selection}
        {disabled} />
      <p class="-mt-1.5 px-1 {getClassName(index)}">
        {choice}
      </p>
    </label>
  {/each}
</div>
